<template>
  <div class="col-12">
    <div class="row">
      <div is="regular-card" v-for="(value, key, index) in homeCards" :card="value" :index="index" :key="index"></div>
    </div>
  </div>
</template>

<script>
import RegularCard from '@/components/card/RegularCard.vue'

export default {
  name: 'RegularCardGroup',
  data () {
    return {
      homeCards: {
        btOrders: {
          name: 'BT订单',
          table: true
        },
        messages: {
          name: '信息',
          table: true
        }
      }
    }
  },
  components: {
    RegularCard
  },
  template: '<regular-card-group />'
}
</script>
