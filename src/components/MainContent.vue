<template>
  <main>
    <home v-if="isHome" />
    <apps v-if="isApps" />
    <app v-if="isApp" />
    <myself v-if="isMyself" />
  </main>
</template>

<script>
import home from '@/components/Home'
import apps from '@/components/Apps'
import app from '@/components//App'
import myself from '@/components/Myself'

export default {
  name: 'Main',
  data () {
    return {
      isHome: true,
      isApps: false,
      isApp: false,
      isMyself: false
    }
  },
  components: {
    home,
    apps,
    app,
    myself
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
