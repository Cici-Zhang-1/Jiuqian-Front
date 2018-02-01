<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col">
        <navbar :navbars="navbars" />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/bars/Navbar'

export default {
  name: 'App',
  data () {
    return {
      navbars: this.$root.$data.navbars
    }
  },
  components: {
    Navbar
  }
}
</script>

<style>

</style>
