<template>
  <div class="col-12 my-2">
    <div class="card">
      <div class="card-header bg-primary d-flex flex-row">
        <div>
          {{ card.name }}
        </div>
        <div v-show="card.card_setting" class="ml-auto">
          <router-link :to="settingsRoute()" class="btn btn-light btn-sm"><i class="fa fa-minus"></i></router-link>
        </div>
      </div>
      <div class="card-body p-0 card-body-h">
        <regular-table v-if="card.card_type === 'table'" :table="card.data.content" :tableThead="card.elements"/>
        <regular-list-group v-else-if="card.card_type === 'list'" :lists="card.data"/>
        <check-lists class="p-1" v-else-if="card.card_type === 'checkbox'" :checkLists="card.data"/>
      </div>
      <div class="card-footer p-1">
        <pagination :page="page" :maxPage="maxPage"/>
      </div>
    </div>
  </div>
</template>

<script>
import RegularTable from '@/components/tables/RegularTable'
import RegularListGroup from '@/components/lists/RegularListGroup'
import CheckLists from '@/components/forms/CheckLists'
import Pagination from '@/components/others/Pagination'

export default {
  name: 'RegularCard',
  props: {
    card: {
      type: Object
    },
    cardKey: {// card 填充内容名称
      required: false
    }
  },
  data () {
    return {
      pagesize: 50, // 页面显示条数
      page: Number(this.$router.currentRoute.query.page) || 1 // 当前展示的页数
    }
  },
  computed: {
    maxPage () {
      return parseInt(this.card.data.num)
    }
  },
  created () {
    if (!this.card.data.num || this.page !== this.card.data.p) { // 第一种情况是因为数据还没有加载，第二种情况是因为加载的page不同
      this.fetchData()
    }
  },
  methods: {
    settingsRoute () { // 设置路由生成
      return '/settings/' + this.card.card_setting + '/' + this.card.cid
    },
    fetchData (to = this.page) { // 获取数据
      this.$bar.start()
      this.$store.dispatch('FETCH_DATA', {
        params: {
          uri: this.card.url,
          data: {
            keyword: this.keyword,
            page: to,
            pagesize: this.card ? this.card.pagesize : this.pagesize
          }
        },
        target: this.card
      }).then(() => {
        this.page = Number(to)
        this.$bar.finish()
      })
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.fetchData(to.query.page)
    next()
  },
  components: {
    RegularTable,
    RegularListGroup,
    CheckLists,
    Pagination
  }
}
</script>

<style scoped>
  .card-body-h {
    /* max-height: 50rem;
    overflow-y: scroll; */
  }
</style>
