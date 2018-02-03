<template>
  <router-link class="nav-item nav-link" exact-active-class="active" :to="navbar.href"><i :class="[navbar.font, navbar.size]"></i></router-link>
</template>

<script>
export default {
  name: 'NavbarItem',
  props: ['navbar']
}
</script>
