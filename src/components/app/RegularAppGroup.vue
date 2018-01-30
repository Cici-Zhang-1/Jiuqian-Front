<template>
  <div class="col-12">
    <div class="row text-primary">
      <regular-app v-for="(homeFunc, index) in homeFuncs" :app="homeFunc" :key="index"/>
    </div>
  </div>
</template>

<script>
import RegularApp from '@/components/app/RegularApp.vue'

export default {
  name: 'RegularAppGroup',
  data () {
    return {
      homeFuncs: {
        createOrder: {
          name: '新建订单',
          font: 'fa fa-plus',
          size: 'fa-2x',
          href: '/'
        },
        dataUpload: {
          name: '数据上传',
          font: 'fa fa-upload',
          size: 'fa-2x',
          href: '/'
        },
        createOrder1: {
          name: '新建订单',
          font: 'fa fa-plus',
          size: 'fa-2x',
          href: '/'
        },
        dataUpload1: {
          name: '数据上传',
          font: 'fa fa-upload',
          size: 'fa-2x',
          href: '/'
        },
        createOrder2: {
          name: '新建订单',
          font: 'fa fa-plus',
          size: 'fa-2x',
          href: '/'
        },
        dataUpload2: {
          name: '数据上传',
          font: 'fa fa-upload',
          size: 'fa-2x',
          href: '/'
        },
        createOrder3: {
          name: '新建订单',
          font: 'fa fa-plus',
          size: 'fa-2x',
          href: '/'
        },
        dataUpload3: {
          name: '数据上传',
          font: 'fa fa-upload',
          size: 'fa-2x',
          href: '/'
        }
      }
    }
  },
  components: {
    RegularApp
  },
  template: '<regular-app-group />'
}
</script>
