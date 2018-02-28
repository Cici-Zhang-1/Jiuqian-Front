<template>
  <input type="hidden" :name="configs.name" v-model="value" />
</template>

<script>
export default {
  name: 'InputHidden',
  props: {
    configs: {
      type: [ Array, Object ],
      required: true
    }
  },
  computed: {
    value: {
      get () {
        return this.configs.value
      },
      set (value) {
        this.configs.value = value
      }
    }
  }
}
</script>
