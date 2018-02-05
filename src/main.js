// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { createStore } from './store'
import testData from './testData'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/custom.css'
import 'popper.js/dist/umd/popper'
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false

const store = createStore()

store.dispatch('FETCH_NAVBARS').then(function () {
  router.onReady(() => {
    // appbar set
    for (let i in store.state.apps) {
      for (let j in store.state.apps[i]['children']) {
        if (store.state.apps[i]['children'][j].href === router.currentRoute.path) {
          store.commit('OPEN_APP', { app: store.state.apps[i]['children'][j] })
          break
        }
      }
    }
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: testData,
  store,
  router,
  components: { App },
  template: '<App/>'
})
