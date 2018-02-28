<template>
  <div class="form-group" v-if="configs.data && configs.data.length">
    <label :for="id">{{ configs.label }}</label>
    <select class="form-control" :name="configs.name" :id="id" v-model="selectValue" multiple>
      <option v-for="(value, key, index) in configs.data.content" :value="value.v" :key="index">{{ value.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'form-group-select',
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
    selectValue: {
      get () {
        return this.configs.value || []
      },
      set (Value) {
        this.configs.value = Value
      }
    }
  },
  created () {
    if (this.configs.data === undefined || JSON.stringify(this.configs.data) === '{}') {
      this.$store.dispatch('FETCH_DATA', {
        params: {
          uri: this.configs.url
        },
        target: this.configs
      })
    }
  }
}
</script>
