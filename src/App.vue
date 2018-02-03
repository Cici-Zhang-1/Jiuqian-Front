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

<script type="module">
import { mapGetters } from 'vuex'
import Navbar from '@/components/bars/Navbar'

export default {
  name: 'App',
  computed: {
    ...(mapGetters({
      navbars: 'activeNavbars'
    }))
  },
  components: {
    Navbar
  }
}
</script>
