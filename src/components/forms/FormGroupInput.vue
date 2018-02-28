<template>
  <div class="form-group">
    <label :for="id">{{ configs.label }}</label>
    <input :type="configs.type" :name="configs.name" class="form-control" :id="id" v-model="value">
  </div>
</template>

<script>
export default {
  name: 'form-group-input',
  props: {
    configs: {
      type: [Array, Object],
      required: true
    }
  },
  computed: {
    id () {
      return this.configs.name
    },
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
