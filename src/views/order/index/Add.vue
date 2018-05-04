<template>
  <div class="row">
    <form @submit.prevent="formSubmit" v-if="!error" class="needs-validation col-12" novalidate>
      <div v-for="(value, key, index) in page_forms" :is="formGroupType(value.type)" :configs="value" :key="index" ></div>
      <div :class="{show: alert}" class="alert alert-danger fade" role="alert">{{ message }}</div>
      <button class="btn btn-lg btn-primary w-100 fixed-bottom" type="submit">保存</button>
    </form>
    <div class="col-12 mt-2" v-if="error">No Available Data To Add</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { formGroupType } from '@/assets/js/custom'
import { postData } from '@/service/service'
import FormGroupInput from '@/components/forms/FormGroupInput'
import FormGroupSelect from '@/components/forms/FormGroupSelect'
import FormGroupRadio from '@/components/forms/FormGroupRadio'
import FormGroupCheckbox from '@/components/forms/FormGroupCheckbox'
import FormGroupTextarea from '@/components/forms/FormGroupTextarea'
export default {
  name: 'Add',
  data () {
    return {
      message: '',
      alert: false
    }
  },
  computed: {
    ...mapGetters({
      page_forms: 'currentPageForms'
    }),
    error: {
      get () {
        return !this.page_forms
      }
    }
  },
  created () {
    if (this.error) {
      alert('您无权打开内容, 请联系管理员')
    }
  },
  methods: {
    ...mapMutations({
      set_reload: 'SET_RELOAD'
    }),
    formGroupType (Value) {
      return formGroupType(Value)
    },
    async formSubmit (e) {
      if (e.target.checkValidity() === false) {
        e.stopPropagation()
        e.target.classList.add('was-validated')
      } else {
        let postReturn = await postData(this.func.url, this.$store.getters.generatePostData({ forms: this.func.forms }))
        if (!postReturn.code) {
          this.set_reload({ reload: true })
          alert('内容新建成功!')
        } else {
          this.message = postReturn.message
          this.alert = true
          e.target.addEventListener('click', this.errorClear)
        }
      }
    },
    errorClear (e) { // 清除错误提示
      this.alert = false
      e.currentTarget.removeEventListener(e.type, this.errorClear)
    }
  },
  components: {
    FormGroupInput,
    FormGroupCheckbox,
    FormGroupSelect,
    FormGroupRadio,
    FormGroupTextarea
  }
}
</script>
