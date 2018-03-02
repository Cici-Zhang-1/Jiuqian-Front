<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <navbar :navbars="navbars" />
      </div>
    </div>
    <main>
      <div class="row">
        <div class="col">
          <headerbar />
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

export default {
  name: 'Order',
  computed: {
    ...(mapGetters({
      navbars: 'activeNavbars'
    }))
  },
  watch: {
    '$route': function (to, from) {
      this.$store.commit('SET_APP_URI', to)
    }
  },
  components: {
    Navbar,
    Headerbar
  }
}
</script>
