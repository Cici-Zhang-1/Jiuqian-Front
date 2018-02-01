<template>
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
      <div is="regular-card" v-for="(value, key, index) in cards" :card="value" :cardKey="key" :cardIndex="index" :key="index"></div>
    </div>
  </main>
</template>

<script>
import Headerbar from '@/components/bars/Headerbar'
import search from '@/components/forms/Search'
import RegularApp from '@/components/apps/RegularApp.vue'
import RegularCard from '@/components/cards/RegularCard'

export default {
  name: 'home',
  data () {
    return {
      apps: this.$root.$data.home.apps,
      cards: this.$root.$data.home.cards
    }
  },
  created () {
  },
  components: {
    Headerbar,
    search,
    RegularApp,
    RegularCard
  }
}
</script>
