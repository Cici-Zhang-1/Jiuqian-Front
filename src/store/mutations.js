/**
 * Created by chuangchuangzhang on 2018/2/2.
 */
import Vue from 'vue'

export default {
  /* SET_ACTIVE_TYPE: (state, { type }) => {
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
    Vue.set(state.users, id, user || false) /!* false means user not found *!/
  }, */

  SET_APP_URI: (state, { fullPath }) => {
    state.navbars = state.navbars.map(navbar => {
      if (navbar.id === 'App') {
        navbar.href = fullPath
      }
      return navbar
    })
  },

  SET_NAVBARS: (state, { navbars }) => {
    state.navbars = navbars
  },

  SET_TABLE_DATA: (state, { tableData }) => {
    /* for (let i in state.navbars) {
      if (state.navbars[i].id === 'App') {
        for (let j in tableData) {
          if (state.navbars[i].data[j] === undefined) {
            Vue.set(state.navbars[i].data, j, tableData[j])
          } else {
            state.navbars[i].data[j] = tableData[j]
          }
        }
        break
      }
    } */
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
