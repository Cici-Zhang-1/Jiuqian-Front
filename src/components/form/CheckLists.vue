<template>
  <form>
    {{ name }}
    <check-lists v-for="(value, index) in checkLists" :checkList="value" :checkListId="index" :key="index"/>
  </form>
</template>

<script>
import CheckList from './CheckList'

export default {
  name: 'CheckLists',
  props: ['checkLists', 'name'],
  data () {
    return {}
  },
  components: {
    CheckList
  }
}
</script>
