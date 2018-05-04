<template>
  <div class="col-12">
    <form @submit.prevent="onSubmit">
      <div class="input-group">
        <div class="input-group-prepend">
          <button class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#pageSearchModal"><i class="fa fa-bars"></i></button>
        </div>
        <input v-for="(value, key, index) in pageSearch" :value="value.value" :key="index" v-if="key !== 'keyword'" :name="value.name" type="hidden" />
        <input type="text" class="form-control" name="keyword" v-model="keyword" aria-label="search" aria-describedby="search-input" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="submit"><i class="fa fa-search"></i></button>
        </div>
      </div>
    </form>
    <div class="modal fade" id="pageSearchModal" tabindex="-1" role="dialog" aria-labelledby="pageSearchModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <form role="form">
            <div class="modal-header">
              <h5 class="modal-title" id="pageSearchModalLabel">搜索设置</h5>
            </div>
            <div class="modal-body">
              <div v-for="(value, key) in pageSearch" :is="formGroupType(value.type)" :configs="value" :key="key" v-if="key !== 'keyword'"></div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary" data-dismiss="modal">保存</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="module">
import FormGroupInput from '@/components/forms/FormGroupInput'
import FormGroupSelect from '@/components/forms/FormGroupSelect'
import FormGroupRadio from '@/components/forms/FormGroupRadio'
import FormGroupCheckbox from '@/components/forms/FormGroupCheckbox'
import FormGroupTextarea from '@/components/forms/FormGroupTextarea'

export default {
  name: 'PageSearch',
  props: {
    pageSearch: {
      type: [Array, Object],
      required: true
    }
  },
  computed: {
    keyword: {
      get () {
        return this.pageSearch.keyword.value
      },
      set (value) {
        this.pageSearch.keyword.value = value
      }
    }
  },
  methods: {
    onSubmit () {
      this.$router.replace({query: {page: 1, id: Math.random()}})
    },
    formGroupType (value) {
      let type = ''
      switch (value) {
        case 'text':
        case 'password':
        case 'hidden':
        case 'number':
        case 'date':
          type = 'form-group-input'
          break
        case 'select':
          type = 'form-group-select'
          break
        case 'checkbox':
          type = 'form-group-checkbox'
          break
        case 'radio':
          type = 'form-group-radio'
          break
        case 'textarea':
          type = 'form-group-textarea'
          break
        default:
          type = 'form-group-input'
      }
      return type
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
