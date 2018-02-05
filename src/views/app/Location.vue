<template>
  <div class="row">
    <div class="col-12">
      <form @submit.prevent="onSubmit">
        <search v-model="defaultValue" :defaultValue="defaultValue" :prepend="false" :append="true"/>
      </form>
    </div>
    <div is="regular-card" :card="card" :cardKey="cardKey" :tableThead="tableThead()">
      <div slot="cardSetting" v-show="card.settings" class="ml-auto">
        <router-link :to="settingsRoute()" class="btn btn-light btn-sm"><i class="fa fa-minus"></i></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/forms/Search'
import RegularCard from '@/components/cards/RegularCard'

export default {
  name: 'Location',
  data () {
    return {
      cardKey: 'btOrders',
      defaultValue: ''
    }
  },
  computed: {
    card () {
      return this.$store.state.home.cards.btOrders
    }
  },
  watch: {
  },
  methods: {
    settingsRoute () { // 设置路由生成
      return '/settings/' + this.card.type + '/' + this.cardKey
    },
    tableThead () { // 在Card中表格头部生成
      return this.card.type === 'table' ? this.$store.state.settings[this.card.type][this.cardKey]['contents'] : false
    },
    onSubmit () {
      console.log(this.defaultValue)
    }
  },
  components: {
    Search,
    RegularCard
  }
}
</script>
