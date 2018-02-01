// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import testData from './testData'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/custom.css'
import 'popper.js/dist/umd/popper'
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false

router.beforeResolve((to, from, next) => {
  const active = true
  const inactive = false
  const rootPath = '/' + to.path.split('/').filter(c => {
    if (c !== '') {
      return true
    }
  }).shift()
  for (let i in testData.navbars) {
    testData.navbars[i].active = testData.navbars[i].href === rootPath ? active : inactive
    if (!(testData.navbars[i].show === true || testData.navbars[i].show === undefined) && testData.navbars[i].active) {
      testData.navbars[i].show = true
    }
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: testData,
  router,
  components: { App },
  template: '<App/>'
})
