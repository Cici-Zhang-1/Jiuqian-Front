<template>
  <div>
    <div class="row">
      <div class="col">
        <setting-bar />
      </div>
    </div>
    <div class="row">
      <div is="regular-card" v-for="(value, key, index) in cards" :card="value" :cardKey="key" :cardIndex="index" :key="index"></div>
    </div>
  </div>
</template>

<script>
import RegularCard from '@/components/cards/RegularCard'
import SettingBar from '@/components/bars/SettingBar'

export default {
  name: 'Settings',
  props: {
    settingType: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      settings: this.$root.$data.settings,
      cardKey: 'table',
      cardIndex: 1,
      cards: {}
    }
  },
  created () {
    for (let key in this.settings) {
      if (this.settingType === key) {
        if (this.settings[key][this.name]) {
          this.cards[this.name] = this.settings[key][this.name]
        }
        break
      }
    }
  },
  methods: {},
  components: {
    RegularCard,
    SettingBar
  }
}
</script>
