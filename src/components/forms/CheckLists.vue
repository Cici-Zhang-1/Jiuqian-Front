<template>
  <form id="checkList" :data-save-path="savePath">
    <check-list v-for="(value, key, index) in checkLists" :checkList="value" :checkListName="key" :checkListId="index" :key="index"/>
  </form>
</template>

<script>
import CheckList from './CheckList'

export default {
  name: 'CheckLists',
  props: ['checkLists'],
  data () {
    return {
      savePath: (function (This) {
        let savePath = This.$router.currentRoute.path
        if (savePath.startsWith('/')) {
          savePath = savePath.substring(1)
        }
        if (savePath.endsWith('/')) {
          savePath = savePath.substr(0, savePath.length - 1)
        }
        return savePath + '/checkLists'
      })(this)
    }
  },
  components: {
    CheckList
  }
}
</script>
