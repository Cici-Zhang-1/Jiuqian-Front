<template>
  <table class="table table-striped table-responsive">
    <thead>
      <tr>
        <th is="regular-th" v-for="(value, key, index) in tableThead" :thData="value" :key="index" v-show="value.checked"></th>
      </tr>
    </thead>
    <tbody>
      <tr is="regular-tr" v-for="(value, key, index) in table" :trData="value" :key="index">
        <td slot="item" slot-scope="props" v-show="tableThead[props.itemName].checked">{{ props.itemData }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import RegularTr from './RegularTr'
import RegularTh from './RegularTh'

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
  },
  components: {
    RegularTr,
    RegularTh
  }

}
</script>
