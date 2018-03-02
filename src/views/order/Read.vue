<template>
  <div class="row">
    <div is="page-search" :pageSearch="pageSearch" v-if="pageSearch"></div>
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
    })
  },
  components: {
    PageSearch,
    RegularCard
  }
}
</script>
