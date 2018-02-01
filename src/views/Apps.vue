<template>
  <main>
    <div class="row">
      <div class="col">
        <headerbar />
      </div>
    </div>
    <div is="regular-app-group" v-for="(value, index) in apps" :appItem="value" :key="index" class="row mb-4"></div>
  </main>
</template>

<script>
import Headerbar from '@/components/bars/Headerbar'
import RegularAppGroup from '@/components/apps/RegularAppGroup.vue'

export default {
  name: 'apps',
  data () {
    return {
      apps: this.$root.$data.apps
    }
  },
  created () {
  },
  components: {
    Headerbar,
    RegularAppGroup
  }
}
</script>
