<template>
  <div class="col-12 my-2">
    <div class="card" :id="cardId">
      <div class="card-header bg-primary d-flex flex-row">
        <div>
          {{ card.name }}
        </div>
        <div class="ml-auto">
          <router-link v-bind:to="settingsRoute" v-show="card.settings" class="btn btn-dark btn-sm"><i class="fa fa-minus"></i></router-link>
        </div>
      </div>
      <div class="card-body p-0">
        <regular-table v-if="card.type === 'table'" :table="card.contents" :tableThead="tableThead"/>
        <regular-list-group v-else-if="card.type === 'list'" :lists="card.contents"/>
        <check-lists class="p-1" v-else-if="card.type === 'checkbox'" :checkLists="card.contents"/>
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
    cardKey: {
      required: false
    },
    cardIndex: {
      required: true
    }
  },
  data () {
    return {
      cardId: 'card' + this.cardIndex,
      settingsRoute: '/settings/table/' + this.cardKey,
      contents: this.card.contents,
      tableThead: this.card.type === 'table' ? this.$root.$data.settings[this.card.type][this.cardKey]['contents'] : false
    }
  },
  components: {
    RegularTable,
    RegularListGroup,
    CheckLists
  }
}
</script>
