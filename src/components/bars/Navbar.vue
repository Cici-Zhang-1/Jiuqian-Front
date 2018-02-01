<template>
  <nav class="nav nav-pills nav-fill fixed-bottom border-top border-secondary bg-light j-nav-lg">
    <router-link class="nav-item nav-link" :class="{active: Home.active}" :to="Home.href" v-if="Home"><i :class="Home.font"></i></router-link>
    <router-link class="nav-item nav-link" :class="{active: Apps.active}" :to="Apps.href" v-if="Apps"><i :class="Apps.font"></i></router-link>
    <div class="nav-item dropup" :class="{active: App.active}" v-if="App">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" :href="App.href" role="button" aria-haspopup="true" aria-expanded="false"><i :class="App.font"></i></a>
      <div class="dropdown-menu">
        <a class="dropdown-item" v-for="(fun, key) in App.funcs" :key="key" :href="fun.href"><i :class="fun.font"></i>{{ fun.name }}</a>
      </div>
    </div>
    <router-link class="nav-item nav-link" :class="{active: Myself.active}" :to="Myself.href" v-if="Myself"><i :class="Myself.font"></i></router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['navbars'],
  data () {
    return this.navbars
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
