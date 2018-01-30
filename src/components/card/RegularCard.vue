<template>
  <div class="col-12">
    <div class="card" :id="cardId">
      <div class="card-header bg-primary d-flex flex-row">
        <div>
          {{ card.name }}
        </div>
        <div class="ml-auto">
          <router-link to="/checklist" class="btn btn-light btn-sm"><i class="fa fa-minus"></i></router-link>
        </div>
      </div>
      <div class="card-body p-0">
        <regular-table :table="card.table"/>
      </div>
      <div class="card-footer">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import VueRouter from 'vue-router'
import RegularTable from '@/components/table/RegularTable'
import Checklist from '@/components/form/Checklist'

const routes = [
  {
    path: '/checklist',
    component: Checklist
  }
]
const router = new VueRouter({
  routes
})

export default {
  name: 'RegularCard',
  props: ['card', 'index'],
  data () {
    return {
      cardId: 'card' + this.index
    }
  },
  components: {
    RegularTable,
    Checklist
  },
  template: '<regular-card />',
  router
}
</script>
