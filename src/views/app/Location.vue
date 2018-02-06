<template>
  <div class="row">
    <div class="col-12">
      <form @submit.prevent="onSubmit">
        <search v-model="keyword" :defaultValue="keyword" :prepend="false" :append="true"/>
      </form>
    </div>
    <div is="regular-card" :card="locationCard" :cardKey="cardKey" :tableThead="tableThead()" v-if="locationCard">
      <div slot="cardSetting" v-show="locationCard.settings" class="ml-auto">
        <router-link :to="settingsRoute()" class="btn btn-light btn-sm"><i class="fa fa-minus"></i></router-link>
      </div>
      <pagination slot="cardFooter" :page="currentPage" :maxPage="maxPage"/>
    </div>
    <div class="col-12 mt-2" v-if="error">No Data Available</div>
  </div>
</template>

<script type="module">
import { mapGetters } from 'vuex'
import Search from '@/components/forms/Search'
import RegularCard from '@/components/cards/RegularCard'
import Pagination from '@/components/others/Pagination'

export default {
  name: 'Location',
  data () {
    return {
      error: null,
      cardKey: 'location',
      keyword: '',
      pagesize: 50, // 页面显示条数
      currentPage: Number(this.$router.currentRoute.query.page) || 1 // 当前展示的页数
    }
  },
  computed: {
    ...mapGetters({
      locationCard: 'currentPage' // 当前页面应该展示的数据
    }),
    maxPage () {
      let { pagesize, length } = this.locationCard
      return Math.ceil(length / pagesize)
    }
  },
  created () {
    this.locationCard.length || this.fetchData()
  },
  methods: {
    settingsRoute () { // 设置路由生成
      return '/settings/' + this.locationCard.type + '/' + this.cardKey
    },
    tableThead () { // 在Card中表格头部生成
      return this.locationCard.type === 'table' ? this.$store.state.settings[this.locationCard.type][this.cardKey]['contents'] : false
    },
    onSubmit () {
    },
    fetchData (to = this.currentPage) { // 获取数据
      this.error = null
      this.$bar.start()
      this.$store.dispatch('FETCH_TABLE_DATA', {
        params: {
          uri: this.$router.currentRoute.path,
          data: {
            keyword: this.keyword,
            page: to,
            pagesize: this.locationCard ? this.locationCard.pagesize : this.pagesize
          }
        }
      }).then(() => {
        this.error = !this.locationCard
        this.$bar.finish()
      })
    }
  },
  components: {
    Search,
    RegularCard,
    Pagination
  }
}
</script>
