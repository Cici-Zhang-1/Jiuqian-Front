/**
 * Created by chuangchuangzhang on 2018/2/2.
 */
import {
  fetchJsonByUri
} from '../api'

export default {
  FETCH_NAVBARS: ({commit, dispatch, state}) => {
    return fetchJsonByUri('/navbars').then(navbars => {
      commit('SET_NAVBARS', { navbars })
    })
  }
}
