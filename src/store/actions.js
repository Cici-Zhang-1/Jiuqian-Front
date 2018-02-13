/**
 * Created by chuangchuangzhang on 2018/2/2.
 */
import {
  fetchJsonByParams
} from '../api'

export default {

  FETCH_TABLE_DATA: ({commit, dispatch, state}, { params }) => {
    return fetchJsonByParams(params).then(tableData => {
      commit('SET_TABLE_DATA', { tableData })
    })
  }
}
