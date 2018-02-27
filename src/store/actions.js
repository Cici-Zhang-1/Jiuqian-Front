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

  FETCH_DATA: ({commit, dispatch, state}, { params, target }) => {
    return fetchJsonByParams(params).then(data => {
      commit('SET_DATA', { data, target })
    })
  }
}
