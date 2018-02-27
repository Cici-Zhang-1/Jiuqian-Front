/**
 * Created by chuangchuangzhang on 2018/2/2.
 */

/**
 * parse the data of home card
 * @param data
 * @returns {{}}
 * @private
 */
let _parseHomeCards = function (data) {
  let homeCards = {}
  for (let i in data) {
    if (data[i].home) {
      homeCards[data[i].cid] = data[i]
    }
  }
  return homeCards
}

export default {
  // ids of the items that should be currently displayed based on
  // current list type and current pagination
  /* activeIds (state) {
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
  }, */

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

  /**
   * Get Home Apps
   * @param state
   * @returns {{}}
   */
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

  /**
   * Get Home Cards
   * @param state
   */
  getHomeCards (state) {
    let homeCards = {}
    for (let i in state.apps) {
      if (state.apps[i].cards.length > 0) {
        homeCards = { ...homeCards, ..._parseHomeCards(state.apps[i].cards) }
      }
      for (let k in state.apps[i].children) {
        if (state.apps[i].children[k].cards.length > 0) {
          homeCards = { ...homeCards, ..._parseHomeCards(state.apps[i].children[k].cards) }
        }
      }
    }
    return homeCards
  },

  currentPageData (state) { // 返回当前活动页面的数据
    return state.navbars.filter(navbar => {
      return navbar.id === 'App'
    })[0].data
  },

  /**
   * 当前页面Cards
   * @param state
   */
  currentPageCards (state) {
    return state.navbars.filter(navbar => {
      return navbar.id === 'App'
    })[0].cards
  },
  /**
   * 当前页面的搜索关键字
   * @param state
   */
  currentPageKeyword (state) {
    return state.navbars.filter(navbar => {
      return navbar.id === 'App'
    })[0].page_search.keyword.value
  }
}
