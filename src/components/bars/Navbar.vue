<template>
  <nav class="nav nav-pills nav-fill fixed-bottom border-top border-secondary bg-light j-nav-lg">
    <router-link class="nav-item nav-link" :class="{active: Home.active}" :to="Home.href" v-if="Home"><i :class="Home.font"></i></router-link>
    <router-link class="nav-item nav-link" :class="{active: Apps.active}" :to="Apps.href" v-if="Apps"><i :class="Apps.font"></i></router-link>
    <div class="nav-item dropup" v-if="App.show">
      <a class="nav-link dropdown-toggle" :class="{active: App.active}" data-toggle="dropdown" :href="App.href" role="button" aria-haspopup="true" aria-expanded="false"><i :class="App.font"></i></a>
      <div class="dropdown-menu">
        <router-link class="dropdown-item" v-for="(fun, key) in App.funcs" :key="key" :to="fun.href"><i :class="fun.font"></i>{{ fun.name }}</router-link>
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
