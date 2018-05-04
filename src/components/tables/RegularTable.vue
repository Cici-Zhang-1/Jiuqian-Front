<template>
  <table class="table table-striped table-responsive">
    <thead>
      <tr>
        <th class="d-none">选中</th>
        <th v-for="(value, key, index) in tableThead" :class="[ value.classes ]" :key="index" v-if="value.checked">{{ value.label }}</th>
      </tr>
    </thead>
    <tbody >
      <tr @inactive="inactiveTr" is="regular-tr" v-for="(value, key, index) in table" :trData="value" :tableThead="tableThead" :key="index"></tr>
    </tbody>
  </table>
</template>

<script>
import RegularTr from './RegularTr'

export default {
  name: 'RegularTable',
  props: {
    table: {
      type: Object | Array,
      required: true
    },
    tableThead: {
      type: Object | Array,
      required: true
    }
  },
  methods: {
    inactiveTr (e) {
      this.$store.commit('SET_INACTIVE_LINES', { table: this.table })
    }
  },
  components: {
    RegularTr
  }
}
</script>

<style scoped>
  table thead, table tbody{
    min-width: 100%;
  }
</style>
