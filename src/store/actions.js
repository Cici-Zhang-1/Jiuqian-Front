/**
 * Created by chuangchuangzhang on 2018/2/2.
 */
import {
  fetchJsonByParams
} from '../api'

export default {
  FETCH_APPS: ({commit}) => {
    return fetchJsonByParams({ uri: 'apps/read' }).then(data => {
      if (data.code === 0) {
        commit('SET_APPS', { ...data })
      }
    })
  },

  /**
   *
   * @param commit
   * @param dispatch
   * @param state
   * @param params
   * {
   *    uri: this.card.url,
   *    data: {
   *      keyword: this.keyword,
   *      page: to,
   *      pagesize: this.card ? this.card.pagesize : this.pagesize
   *    }
   *  }
   * @param target
   * @constructor
   */
  FETCH_DATA: ({commit, dispatch, state}, { params, target }) => {
    return fetchJsonByParams(params).then(data => {
      if (data.code === 0) {
        commit('SET_DATA', { ...data, target })
      }
    })
  }
}
