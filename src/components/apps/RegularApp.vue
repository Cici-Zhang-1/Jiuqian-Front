<template>
  <div class="col-3 my-2">
    <a class="btn p-1 text-center" :href="app.href">
      <i class="d-block" :class="[app.font, app.size]"></i><small>{{ app.name }}</small>
    </a>
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
