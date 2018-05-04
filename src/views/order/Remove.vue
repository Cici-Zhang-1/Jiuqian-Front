<template>
  <div></div>
</template>

<script>
import { mapMutations } from 'vuex'
import { postData } from '@/service/service'
export default {
  name: 'Remove',
  computed: {
    func: {
      get () {
        return this.$store.getters.currentPageFunc({ url: this.$router.currentRoute.path })
      },
      set (Value) {}
    },
    trs: {
      get () {
        return this.$store.getters.currentPageActiveLine({ url: this.$router.currentRoute.page, all: true })
      },
      set (Value) {}
    },
    error: {
      get () {
        return !this.func.forms
      }
    }
  },
  created () {
    if (this.tr === false) {
      alert('请选择需要修改的内容')
      this.$router.go(-1)
    } else {
      this.resolveData()
    }
  },
  methods: {
    ...mapMutations({
      set_reload: 'SET_RELOAD'
    }),
    async formSubmit () {
      if (window.confirm('您确定要删除选中的内容?')) {
        let postReturn = await postData(this.func.uri, {selected: this.$store.getters.generatePostData({trs: this.func.trs})})
        if (!postReturn.code) {
          window.alert('选中内容删除成功!')
          this.set_reload({ reload: true })
          this.$router.go(-1)
        } else {
          window.alert(postReturn.message)
          this.$router.go(-1)
        }
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>
