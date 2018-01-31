<template>
  <div class="col-12 my-2">
    <div class="card" :id="cardId">
      <div class="card-header bg-primary d-flex flex-row">
        <div>
          {{ card.name }}
        </div>
        <div class="ml-auto">
          <router-link v-bind:to="checklistsRoute" class="btn btn-dark btn-sm"><i class="fa fa-minus"></i></router-link>
        </div>
      </div>
      <div class="card-body p-0">
        <regular-table :table="card.table"/>
      </div>
    </div>
  </div>
</template>

<script>
import RegularTable from '@/components/table/RegularTable'

export default {
  name: 'RegularCard',
  props: ['card', 'cardKey', 'cardIndex'],
  data () {
    return {
      cardId: 'card' + this.cardIndex,
      checklistsRoute: '/checklists/' + this.cardKey
    }
  },
  components: {
    RegularTable
  },
  template: '<regular-card />'
}
</script>
