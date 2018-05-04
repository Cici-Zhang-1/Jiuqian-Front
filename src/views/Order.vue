<template>
  <div class="container-fluid">
    <div class="row" v-if="showNavbars">
      <div class="col">
        <navbar :navbars="navbars" />
      </div>
    </div>
    <main>
      <div class="row">
        <div class="col">
          <headerbar v-if="showHeaderbar" />
          <funcbars v-if="showFuncbars" />
        </div>
      </div>
      <router-view></router-view>
    </main>
  </div>
</template>

<script type="module">
// TODO 空值处理
// TODO page_search
// TODO func
// TODO All Same page use same component, categories
import { mapGetters } from 'vuex'
import Navbar from '@/components/bars/Navbar'
import Headerbar from '@/components/bars/Headerbar'
import Funcbars from '@/components/bars/Funcbars'

export default {
  name: 'Order',
  data () {
    return {
      showNavbars: true,
      showHeaderbar: true,
      showFuncbars: false
    }
  },
  computed: {
    ...(mapGetters({
      navbars: 'activeNavbars'
    }))
  },
  created () {
    this.setBars(this.$router.currentRoute.meta)
  },
  methods: {
    setBars (Value) {
      if (Value.showHeaderbar !== undefined) {
        this.showHeaderbar = Value.showHeaderbar
        this.showNavbars = Value.showNavbars
        this.showFuncbars = Value.showFuncbars
      } else {
        this.showHeaderbar = true
        this.showNavbars = true
        this.showFuncbars = false
      }
    }
  },
  watch: {
    '$route': function (to, from) {
      this.$store.commit('SET_APP_URI', to)
    },
    '$route.meta': function (to, from) {
      this.setBars(to)
    }
  },
  components: {
    Navbar,
    Headerbar,
    Funcbars
  }
}
</script>
