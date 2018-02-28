<template>
  <div class="row">
    <div is="page-search" :pageSearch="pageSearch"></div>
    <div is="regular-card" v-for="(card, index) in cards" :card="card" :key="index" v-if="cards.length"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import RegularCard from '@/components/cards/RegularCard'
import PageSearch from '@/components/forms/PageSearch'

export default {
  name: 'Read',
  computed: {
    ...mapGetters({
      cards: 'currentPageCards', // 当前页面应该展示的数据
      pageSearch: 'currentPageSearch'
    })/* ,
    ...mapState([
      'reload'
    ]) */
  },
  /* created () {
    if (this.reload) {
      this.set_reload({ reload: false })
      this.$router.replace({query: {page: 1, id: Math.random()}})
    }
  },
  methods: {
    ...mapMutations({
      set_reload: 'SET_RELOAD'
    })
  }, */
  components: {
    PageSearch,
    RegularCard
  }
}
</script>
