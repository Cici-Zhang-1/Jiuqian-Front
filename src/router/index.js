import Vue from 'vue'
import Router from 'vue-router'
import Settings from '@/views/Settings'
import Home from '@/views/home'
import Apps from '@/views/Apps'
import App from '@/views//App'
import Myself from '@/views/Myself'
import Location from '@/views/app/Location'
import Funcs from '@/views/Funcs'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
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
      component: App,
      children: [
        {
          name: 'Location',
          path: 'location',
          component: Location
        }
      ]
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
    },
    {
      name: 'Funcs',
      path: '/funcs/:funcType/:name',
      component: Funcs,
      meta: { showNavbar: false },
      props: true
    }
  ]
})
