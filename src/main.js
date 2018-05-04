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

router.onReady(() => {
  if (JSON.stringify(store.state.apps) === '{}') {
    // TODO 放在这个地方加载App，耗时过长，应该有加载界面
    store.dispatch('FETCH_APPS').then(function () {
      for (let i in store.state.apps) {
        for (let j in store.state.apps[i]['children']) {
          if (store.state.apps[i]['children'][j].url === router.currentRoute.path) {
            store.commit('OPEN_APP', { app: store.state.apps[i]['children'][j] })
            if (router.currentRoute.fullPath !== store.state.apps[i]['children'][j].url) {
              store.commit('SET_APP_URI', router.currentRoute)
            }
            break
          }
        }
      }
      router.beforeEach(function (to, from, next) {
        for (let i in to.matched) {
          if (to.matched[i].name === 'App') {
            store.commit('SET_APP_URI', to)
            break
          }
        }
        next()
      })
      app.$mount('#app')
    })
  }
})
