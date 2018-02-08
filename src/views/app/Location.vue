<template>
  <div class="row">
    <div class="col-12">
      <form>
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
import { mapGetters } from 'vuex'
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
      locationCard: 'currentPageDate' // 当前页面应该展示的数据
    }),
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
    if (!this.locationCard.length || this.page !== this.locationCard.page) { // 第一种情况是因为数据还没有加载，第二种情况是因为加载的page不同
      this.fetchData()
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      for (let i in to.matched) {
        if (to.matched[i].name === 'App') {
          vm.$store.commit('SET_APP_URI', to)
        }
      }
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.fetchData(to.query.page)
    next()
  },
  methods: {
    settingsRoute () { // 设置路由生成
      return '/settings/' + this.locationCard.type + '/' + this.cardKey
    },
    tableThead () { // 在Card中表格头部生成
      return this.locationCard.type === 'table' ? this.$store.state.settings[this.locationCard.type][this.cardKey]['contents'] : false
    },
    onSubmit () {
      this.$router.push({query: {page: 1}})
    },
    fetchData (to = this.page) { // 获取数据
      this.$bar.start()
      this.$store.dispatch('FETCH_TABLE_DATA', {
        params: {
          uri: this.locationCard.uri,
          data: {
            keyword: this.keyword,
            page: to,
            pagesize: this.locationCard ? this.locationCard.pagesize : this.pagesize
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
