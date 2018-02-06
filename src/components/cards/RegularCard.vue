<template>
  <div class="col-12 my-2">
    <div class="card">
      <div class="card-header bg-primary d-flex flex-row">
        <div>
          {{ card.name }}
        </div>
        <slot name="cardSetting"></slot>
      </div>
      <div class="card-body p-0 card-body-h">
        <regular-table v-if="card.type === 'table'" :table="card.contents" :tableThead="tableThead"/>
        <regular-list-group v-else-if="card.type === 'list'" :lists="card.contents"/>
        <check-lists class="p-1" v-else-if="card.type === 'checkbox'" :checkLists="card.contents"/>
      </div>
      <div class="card-footer p-1">
        <slot name="cardFooter"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import RegularTable from '@/components/tables/RegularTable'
import RegularListGroup from '@/components/lists/RegularListGroup'
import CheckLists from '@/components/forms/CheckLists'

export default {
  name: 'RegularCard',
  props: {
    card: {
      type: Object
    },
    cardKey: {// card 填充内容名称
      required: false
    },
    tableThead: {// card填充内容为表格时，需要表头
      required: false
    }
  },
  data () {
    return {}
  },
  components: {
    RegularTable,
    RegularListGroup,
    CheckLists
  }
}
</script>

<style scoped>
  .card-body-h {
    max-height: 50rem;
    overflow-y: scroll;
  }
</style>
