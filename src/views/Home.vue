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
      <div class="row">
        <div class="col">
          <form>
            <search />
          </form>
        </div>
      </div>
      <div class="row mt-2 text-primary">
        <regular-app v-for="(value, index) in apps" :app="value" :key="index"/>
      </div>
      <div class="row mt-2">
        <div is="regular-card" v-for="(card, key, index) in cards" :card="card" :cardKey="key" :cardIndex="index" :key="index">
          <div slot="cardSetting" v-show="card.settings" class="ml-auto">
            <router-link :to="settingsRoute(card, key)" class="btn btn-light btn-sm"><i class="fa fa-minus"></i></router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script type="module">
import { mapGetters } from 'vuex'
import Navbar from '@/components/bars/Navbar'
import Headerbar from '@/components/bars/Headerbar'
import search from '@/components/forms/Search'
import RegularApp from '@/components/apps/RegularApp.vue'
import RegularCard from '@/components/cards/RegularCard'

export default {
  name: 'home',
  data () {
    return {
    }
  },
  computed: {
    home () {
      return this.$store.getters.getStateByKey('home')
    },
    apps () {
      return this.home.apps
    },
    cards () {
      return this.home.cards
    },
    ...(mapGetters({
      navbars: 'activeNavbars'
    }))
  },
  methods: {
    settingsRoute (card, cardKey) {
      return '/settings/' + card.type + '/' + cardKey
    }
  },
  components: {
    Navbar,
    Headerbar,
    search,
    RegularApp,
    RegularCard
  }
}
</script>
