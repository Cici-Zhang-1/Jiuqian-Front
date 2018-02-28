<template>
  <div class="form-group">
    <label :for="id">{{ configs.label }}</label>
    <textarea class="form-control" :name="configs.name" :id="id" rows="3" v-model="value"></textarea>
  </div>
</template>

<script>
export default {
  name: 'form-group-textarea',
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
        return this.configs.value || ''
      },
      set (value) {
        this.configs.value = value
      }
    }
  }
}
</script>
