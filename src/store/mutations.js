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

  SET_NAVBARS: (state, { navbars }) => {
    state.navbars = navbars
  },

  SET_TABLE_DATA: (state, { tableData }) => {
    state.navbars.map(navbar => {
      if (navbar.id === 'App') {
        for (let i in tableData) {
          if (navbar.data[i] === undefined) {
            Vue.set(navbar.data, i, tableData[i])
          } else {
            navbar.data[i] = tableData[i]
          }
        }
      }
      return navbar
    })
  },

  OPEN_APP: (state, { app }) => { // 打开app时需要设置navbar
    state.navbars = state.navbars.map(navbar => {
      if (navbar.id === 'App') {
        for (let i in app) {
          navbar[i] = app[i]
        }
        navbar.show = true
      }
      return navbar
    })
  }
}
