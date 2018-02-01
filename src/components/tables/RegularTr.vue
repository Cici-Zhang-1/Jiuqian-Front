<template>
  <tr>
    <slot name="item" v-for="(value, key) in trData" :itemData="value" :itemName="key"></slot>
  </tr>
</template>

<script>
export default {
  name: 'RegularTr',
  props: ['trData'],
  data () {
    return {}
  }
}
</script>
