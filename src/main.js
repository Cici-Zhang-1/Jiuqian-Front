// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/custom.css'
import 'popper.js/dist/umd/popper'
import 'bootstrap/dist/js/bootstrap.min'
import Progressbar from './components/bars/Progressbar.vue'

// global progress bar
const bar = Vue.prototype.$bar = new Vue(Progressbar).$mount()
document.body.appendChild(bar.$el)

Vue.config.productionTip = false

const store = createStore()
sync(store, router) // 同步store和router

const app = new Vue({
  data () {
    return {
      activeApp: null
    }
  },
  store,
  router,
  components: { App },
  template: '<App/>'
})
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
    router.beforeEach(function (to, from, next) {
      for (let i in to.matched) {
        if (to.matched[i].name === 'App') {
          store.commit('SET_APP_URI', to)
        }
      }
      next()
    })
    app.$mount('#app')
  })
})
