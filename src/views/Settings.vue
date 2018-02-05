<template>
  <div class="container-fluid">
    <main>
      <div class="row">
        <div class="col">
          <setting-bar />
        </div>
      </div>
      <div class="row">
        <div is="regular-card" v-for="(value, key, index) in cards" :card="value" :cardKey="key" :cardIndex="index" :key="index"></div>
      </div>
    </main>
  </div>
</template>

<script type="module">
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
  computed: {
    cards: {
      get () {
        return this.$store.getters.getSettings({settingType: this.settingType, name: this.name})
      },
      set () {

      }
    }
  },
  components: {
    RegularCard,
    SettingBar
  }
}
</script>
