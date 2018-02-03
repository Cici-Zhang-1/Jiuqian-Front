/**
 * Created by chuangchuangzhang on 2018/2/2.
 */
import Vue from 'vue'

export default {
  SET_ACTIVE_TYPE: (state, { type }) => {
    state.activeType = type
  },

  SET_LIST: (state, { type, ids }) => {
    state.lists[type] = ids
  },

  SET_ITEMS: (state, { items }) => {
    items.forEach(item => {
      if (item) {
        Vue.set(state.items, item.id, item)
      }
    })
  },

  SET_USER: (state, { id, user }) => {
    Vue.set(state.users, id, user || false) /* false means user not found */
  },

  OPEN_APP: (state, { app }) => {
    state.navbars = state.navbars.map(navbar => {
      if (navbar.id === 'App') {
        navbar = {...navbar, ...app}
        navbar.show = true
      }
      return navbar
    })
  }
}
