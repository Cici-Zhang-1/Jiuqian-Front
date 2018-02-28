<template>
  <div>
    <div v-for="(value, key, index) in configs.data.contents" v-if="configs.data.length" :key="index" class="form-check">
      <input class="form-check-input" type="radio" :name="configs.name" :id="id" v-model="radioValue" :value="value.v" />
      <label class="form-check-label" :for="id">{{ configs.label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-group-radio',
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
    radioValue: {
      get () {
        return this.configs.value
      },
      set (value) {
        this.configs.value = value
      }
    }
  },
  created () {
    if (JSON.stringify(this.configs.data) === '{}') {
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
