<template>
  <header class="navbar navbar-expand navbar-light bg-light fixed-top">
    <router-link class="navbar-brand mr-auto" :to="config.href" >{{ config.name }}</router-link>
    <ul class="navbar-nav">
      <li class="nav-item">
        <span class="navbar-text">{{ myselfName }}</span>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="fa fa-sign-out"></i></a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Headerbar',
  data () {
    return {
      config: this.$root.$data.config,
      myselfName: this.$root.$data.myself.name
    }
  },
  computed: {

  }
}
</script>
