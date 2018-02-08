<template>
  <div class="row">
    <form v-if="addEdit" @submit.prevent="addEditSubmit" class="needs-validation col-12" novalidate>
      <div class="form-group">
        <label>库位名称:</label>
        <input v-model="sn" class="form-control" name="sn" type="text" placeholder="请填写库位名称" value="" required />
        <div class="invalid-feedback">必须填写库位名称</div>
      </div>
      <div class="form-group">
        <label>库位状态:</label>
        <select v-model="status" class="form-control" name='status'>
          <option value="0">空</option>
          <option value="1">未装满</option>
          <option value="2">满</option>
        </select>
      </div>
      <div :class="{show: alert}" class="alert alert-danger fade" role="alert">{{ message }}</div>
      <button class="btn btn-primary w-100" type="submit">保存</button>
    </form>
    <form v-if="inOut"></form>
  </div>
</template>

<script type="module">
import { mapState } from 'vuex'
import { getData, postData } from '@/service/service'

export default {
  name: 'FuncLocation',
  props: {
    action: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      id: 0,
      sn: '',
      status: 0,
      message: '',
      alert: false
    }
  },
  computed: {
    ...mapState([
      'activeLine'
    ]),
    uri () {
      return '/location/' + this.action
    },
    addEdit () { // 是否编辑库位或增加库位
      let Show = true
      let Unshow = false
      return this.action === 'add' || this.action === 'edit' ? Show : Unshow
    },
    inOut () { // 是否为出入库
      let Show = true
      let Unshow = false
      return this.action === 'in' || this.action === 'out' ? Show : Unshow
    }
  },
  async created () {
    if (this.action === 'edit') { // 当是编辑库位时需要从服务器获取相应数据
      this.resolveId()
      // this.id = this.$router.currentRoute.query.id || undefined
      if (!this.id) {
        alert('请选择需要修改的库位')
        this.$router.go(-1)
      } else {
        let getReturn = await getData(this.uri, { id: this.id })
        if (getReturn.code) {
          this.sn = getReturn.contents.sn
          this.status = getReturn.contents.status
        } else {
          alert(getReturn.message)
          this.$router.go(-1)
        }
      }
    }
  },
  methods: {
    resolveId () {
      if (this.activeLine) {
        let start = this.activeLine.firstChild
        while (start && start.getAttribute('name') !== 'id') {
          start = start.nextSibling
        }
        this.id = Number(start.textContent)
      }
    },
    async addEditSubmit (e) { // 编辑库位或增加库位数据提交
      if (e.target.checkValidity() === false) {
        e.stopPropagation()
        e.target.classList.add('was-validated')
      } else {
        let postReturn = await postData(this.uri, { sn: this.sn, status: this.status })
        if (postReturn.code) {
          this.$router.go(-1)
        } else {
          this.message = postReturn.message
          this.alert = true
          e.target.addEventListener('click', this.errorClear)
        }
      }
    },
    errorClear (e) { // 清除错误提示
      this.alert = false
      e.currentTarget.removeEventListener('click', this.errorClear)
    }
  }
}
</script>
