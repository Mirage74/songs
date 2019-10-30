import * as ActionTypes from './constant';
import { BACKEND_URL } from '../../config'
import axios from 'axios'

export const getSongs = () => async (dispatch) => {
  const res = await axios.get(BACKEND_URL + 'get')
  dispatch({
    type: ActionTypes.GET_LIST_FROM_DB,
    payload: res.data.songs
  })
}








