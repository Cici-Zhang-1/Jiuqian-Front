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

  getReload: (state) => {
    return state.reload
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
   * 获取card Info
   * @param state
   * @returns {function({id: *})}
   */
  getCard: (state) => ({ id }) => {
    return state.navbars[state.NAVBAR_APP_INDEX].cards.filter(__ => {
      return __.cid === id
    })[0]
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
    return state.navbars[state.NAVBAR_APP_INDEX].data
    /* return state.navbars.filter(navbar => {
      return navbar.id === 'App'
    })[0].data */
  },

  /**
   * 当前页面Cards
   * @param state
   */
  currentPageCards (state) {
    return state.navbars[state.NAVBAR_APP_INDEX].cards
    /* return state.navbars.filter(navbar => {
      return navbar.id === 'App'
    })[0].cards */
  },

  /**
   * 获取当前页面搜索设置
   * @param state
   * @returns {*}
   */
  currentPageSearch (state) {
    return state.navbars[state.NAVBAR_APP_INDEX].page_search
    /* return state.navbars.filter(navbar => {
      return navbar.id === 'App'
    })[0].page_search */
  },

  /**
   * 当前页面的表单元素
   * @param state
   * @returns {*|string|HTMLCollectionOf<HTMLFormElement>}
   */
  currentPageForms (state) {
    return state.navbars[state.NAVBAR_APP_INDEX].page_forms
  },
  /**
   * 生成当前搜索界面的键值对
   * @param state
   * @returns {{}}
   */
  currentPageSearchValues (state) {
    let t = state.navbars.filter(navbar => {
      return navbar.id === 'App'
    })[0].page_search

    let r = {}

    for (let i in t) {
      r[i] = t[i].value
    }
    return r
  },

  /**
   * 当前页面的Func
   * @param state
   * @returns {function({url: *})}
   */
  currentPageFunc: (state) => ({ url }) => {
    console.log(state.navbars[state.NAVBAR_APP_INDEX])
    return state.navbars[state.NAVBAR_APP_INDEX].funcs.filter(__ => {
      return __.url === url
    })[0]
  },

  /**
   * 获取当前页面的活动行
   * @param state
   * @returns {function({url: *})}
   */
  currentPageActiveLine: (state) => ({ url, all = false }) => {
    let line = []
    state.navbars[state.NAVBAR_APP_INDEX].cards.forEach(__ => {
      if ((__.data.length !== undefined && __.data.length > 0) ||
        (__.data.content !== undefined && ((__.data.content instanceof Array && __.data.content.length > 0) ||
          (__.data.content instanceof Object && JSON.stringify(__.data.content) !== '{}')
        ))) {
        for (let j in __.data.content) {
          if (__.data.content[j].checked) {
            line.push(__.data.content[j])
          }
        }
      }
    })
    if (line.length === 0) {
      return false
    } else {
      if (all) {
        return line
      } else {
        return line[0]
      }
    }
  },

  /**
   * 生成需要提交的表单的键值对
   * @param state
   * @returns {function({forms: *})}
   */
  generatePostData: (state) => ({ forms = {}, trs = [] }) => {
    let data = {}
    if (JSON.stringify(forms) !== '{}' && trs.length === 0) {
      for (let i in forms) {
        data[i] = forms[i].value
      }
    } else if (trs.length !== 0) {
      for (let i in trs) {
        data[i] = trs[i].v
      }
    }

    return data
  }
}
