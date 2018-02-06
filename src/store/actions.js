/**
 * Created by chuangchuangzhang on 2018/2/2.
 */
import {
  fetchJsonByUri,
  fetchJsonByParams
} from '../api'

export default {
  FETCH_NAVBARS: ({commit, dispatch, state}) => {
    return fetchJsonByUri('/navbars').then(navbars => {
      commit('SET_NAVBARS', { navbars })
    })
  },

  FETCH_TABLE_DATA: ({commit, dispatch, state}, { params }) => {
    return fetchJsonByParams(params).then(tableData => {
      commit('SET_TABLE_DATA', { tableData })
    })
  }
}
