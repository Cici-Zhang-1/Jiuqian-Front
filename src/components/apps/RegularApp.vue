<template>
  <div class="col-3 my-2">
    <router-link class="btn p-1 text-center" :to="app.href"><i class="d-block" :class="[app.font, app.size]"></i><small>{{ app.name }}</small></router-link>
  </div>
</template>

<script>
export default {
  name: 'RegularApp',
  props: ['app'],
  data () {
    return {}
  },
  template: '<regular-app />'
}
</script>
