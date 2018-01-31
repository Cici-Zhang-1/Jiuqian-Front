<template>
  <div class="col-12">
    <div class="row">
      <div is="regular-card" v-for="(value, key, index) in homeCards" :card="value" :cardKey="key" :cardIndex="index" :key="index"></div>
    </div>
  </div>
</template>

<script>
import RegularCard from '@/components/card/RegularCard.vue'

export default {
  name: 'RegularCardGroup',
  data () {
    return this.$root.$data.cards
  },
  components: {
    RegularCard
  },
  template: '<regular-card-group />'
}
</script>
