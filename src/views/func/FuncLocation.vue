<template>
  <div class="row">
    <form @submit.prevent="onSubmit" class="needs-validation col-12" novalidate>
      <div class="form-group">
        <label>库位名称:</label>
        <input v-model="name" class="form-control" name="name" type="text" placeholder="请填写库位名称" value="" required />
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
  </div>
</template>

<script type="module">
import { postData } from '@/service/service'

export default {
  name: 'FuncLocation',
  data () {
    return {
      name: '',
      status: 0,
      message: '',
      alert: false,
      action: '/location/add'
    }
  },
  created () {
  },
  methods: {
    async onSubmit (e) {
      if (e.target.checkValidity() === false) {
        e.stopPropagation()
        e.target.classList.add('was-validated')
      } else {
        let postReturn = await postData(this.action, { name: this.name, status: this.status })
        if (postReturn.code) {
          this.$router.go(-1)
        } else {
          this.message = postReturn.message
          this.alert = true
          e.target.addEventListener('click', this.onClick)
        }
      }
    },
    onClick (e) {
      this.alert = false
      e.currentTarget.removeEventListener('click', this.onClick)
    }
  }
}
</script>
