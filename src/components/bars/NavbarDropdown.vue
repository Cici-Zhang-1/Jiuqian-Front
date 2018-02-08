<template>
  <div class="nav-item dropup">
    <router-link class="nav-link dropdown-toggle" exact-active-class="active" data-toggle="dropdown" :to="navbar.href" role="button" aria-haspopup="true" aria-expanded="false" ><i :class="[navbar.font, navbar.size]"></i></router-link>
    <div class="dropdown-menu">
      <router-link class="dropdown-item py-2" v-for="(fun, key) in navbar.funcs" :key="key" :to="fun.href"><i :class="fun.font"></i>{{ fun.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarDropdown',
  props: ['navbar'],
  computed: {
    to: function () {
      return this.$router.currentRoute.fullPath
    }
  }
}
</script>
