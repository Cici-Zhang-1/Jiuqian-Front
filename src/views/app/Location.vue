<template>
  <div class="row">
    <div class="col-12">
      <form @submit="onSubmit">
        <search @search="onSubmit" v-model="keyword" :defaultValue="keyword" :prepend="false" :append="true"/>
      </form>
    </div>
    <div is="regular-card" :card="locationCard" :cardKey="cardKey" :tableThead="tableThead()" v-if="locationCard.length">
      <div slot="cardSetting" v-show="locationCard.settings" class="ml-auto">
        <router-link :to="settingsRoute()" class="btn btn-light btn-sm"><i class="fa fa-minus"></i></router-link>
      </div>
      <pagination slot="cardFooter" :page="page" :maxPage="maxPage"/>
    </div>
    <div class="col-12 mt-2" v-if="error">No Data Available</div>
  </div>
</template>

<script type="module">
import { mapState, mapGetters, mapMutations } from 'vuex'
import Search from '@/components/forms/Search'
import RegularCard from '@/components/cards/RegularCard'
import Pagination from '@/components/others/Pagination'

export default {
  name: 'Location',
  data () {
    return {
      cardKey: 'location',
      pagesize: 50, // 页面显示条数
      page: Number(this.$router.currentRoute.query.page) || 1 // 当前展示的页数
    }
  },
  computed: {
    ...mapGetters({
      locationCard: 'currentPageData' // 当前页面应该展示的数据
    }),
    ...mapState([
      'reload'
    ]),
    maxPage () {
      let { pagesize, length } = this.locationCard
      return Math.ceil(length / pagesize)
    },
    error () {
      return !this.locationCard.length
    },
    keyword: {
      get () {
        return this.locationCard.keyword
      },
      set (value) {
        this.locationCard.keyword = value
      }
    }
  },
  created () {
    if (this.reload) {
      this.set_reload({ reload: false })
      this.$router.replace({query: {page: 1, id: Math.random()}})
    } else {
      if (!this.locationCard.length || this.page !== this.locationCard.page) { // 第一种情况是因为数据还没有加载，第二种情况是因为加载的page不同
        this.fetchData()
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('ddd')
    this.fetchData(to.query.page)
    next()
  },
  methods: {
    ...mapMutations({
      set_reload: 'SET_RELOAD'
    }),
    settingsRoute () { // 设置路由生成
      return '/settings/' + this.locationCard.type + '/' + this.cardKey
    },
    tableThead () { // 在Card中表格头部生成
      return this.locationCard.type === 'table' ? this.$store.state.settings[this.locationCard.type][this.cardKey]['contents'] : false
    },
    onSubmit () {
      this.$router.replace({query: {page: 1, id: Math.random()}})
    },
    fetchData (to = this.page) { // 获取数据
      this.$bar.start()
      this.$store.dispatch('FETCH_TABLE_DATA', {
        params: {
          uri: this.locationCard.uri,
          data: {
            keyword: this.keyword,
            page: to
          }
        }
      }).then(() => {
        this.page = Number(to)
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
