<template>
  <main>
    <div class="row">
      <div class="col">
        <headerbar />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <ul class="list-group">
          <li class="list-group-item">
            <div class="row align-items-center">
              <div class="col-2 offset-1 bg-primary name-image rounded text-white"><h3 class="">{{ myself.name.slice(myself.name.length - 1) }}</h3></div>
              <div class="col-7 offset-1">
                <ul class="list-unstyled text-primary">
                  <li><h5>{{ myself.name }}</h5></li>
                  <li>{{ myself.telephone }}</li>
                  <li>{{ myself.department }}</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div is="func-lists" class="row my-3" v-for="(value, key, index) in myself.funcs" :funcList="value" :key="index"></div>
  </main>
</template>

<script>
import Headerbar from '@/components/bars/Headerbar'
import FuncLists from '@/components/lists/FuncLists'

export default {
  name: 'myself',
  data () {
    return {
      myself: this.$root.$data.myself
    }
  },
  components: {
    Headerbar,
    FuncLists
  }
}
</script>

<style scoped>
.name-image {
  padding: 15px;
}
.name-image h3 {
  margin: 0;
}
</style>
