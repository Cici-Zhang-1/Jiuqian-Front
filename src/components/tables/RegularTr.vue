<template>
  <tr @click="activeTr">
    <td v-for="(value, key, index) in trData" v-show="tableThead[key].checked" :key="index" :name="key">{{ value }}</td>
  </tr>
</template>

<script>
export default {
  name: 'RegularTr',
  props: ['trData', 'tableThead'],
  methods: {
    activeTr (e) {
      if (!e.currentTarget.classList.contains('table-success')) {
        if (e.currentTarget.parentNode.getElementsByClassName('table-success').length > 0) {
          for (let ele of e.currentTarget.parentNode.getElementsByClassName('table-success')) {
            ele.classList.remove('table-success')
          }
        }
        e.currentTarget.className = 'table-success'
        this.$store.commit('SET_ACTIVE_LINE', { tr: e.currentTarget })
      }
    }
  },
  data () {
    return {}
  }
}
</script>
