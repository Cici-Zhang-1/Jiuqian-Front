/**
 * Created by chuangchuangzhang on 2018/2/2.
 */

export default {
  // ids of the items that should be currently displayed based on
  // current list type and current pagination
  activeIds (state) {
    const { activeType, itemsPerPage, lists } = state

    if (!activeType) {
      return []
    }

    const page = Number(state.route.params.page) || 1
    const start = (page - 1) * itemsPerPage
    const end = page * itemsPerPage

    return lists[activeType].slice(start, end)
  },

  // items that should be currently displayed.
  // this Array may not be fully fetched.
  activeItems (state, getters) {
    return getters.activeIds.map(id => state.items[id]).filter(_ => _)
  },

  activeNavbars (state) {
    return state.navbars.filter(_ => {
      return _.show
    })
  },

  activeApp (state) {
    return state.navbars.filter(_ => {
      return _.id === 'App'
    })[0]
  },

  getConfigs (state) {
    return state.configs
  },

  getStateByKey: (state) => (key) => {
    return state[key]
  },

  // 获取设置的内容项
  getSettings: (state) => ({ settingType, name }) => {
    let settings = {}
    for (let key in state.settings) {
      if (settingType === key) {
        if (state.settings[key][name]) {
          settings[name] = state.settings[key][name]
        }
      }
    }
    return settings
  },

  getHomeApps (state) {
    let homeApps = {}
    for (let i in state.apps) {
      for (let j in state.apps[i].children) {
        if (state.apps[i].children[j].home) {
          homeApps[j] = state.apps[i].children[j]
        }
      }
    }
    return homeApps
  },

  currentPageDate (state) { // 返回当前活动页面的数据
    return state.navbars.filter(navbar => {
      return navbar.id === 'App'
    })[0].data
  }
}
