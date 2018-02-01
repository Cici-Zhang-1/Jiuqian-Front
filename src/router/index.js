import Vue from 'vue'
import Router from 'vue-router'
import Settings from '@/views/Settings'
import Home from '@/views/home'
import Apps from '@/views/Apps'
import App from '@/views//App'
import Myself from '@/views/Myself'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      name: 'index',
      path: '/',
      redirect: '/home'
    },
    {
      name: 'Home',
      path: '/home',
      component: Home
    },
    {
      name: 'Apps',
      path: '/apps',
      component: Apps
    },
    {
      name: 'App',
      path: '/app',
      component: App
    },
    {
      name: 'Myself',
      path: '/myself',
      component: Myself
    },
    {
      name: 'Settings',
      path: '/settings/:settingType/:name',
      component: Settings,
      props: true
    }
  ]
})
