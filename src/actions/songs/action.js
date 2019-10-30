import * as ActionTypes from './constant';
import { BACKEND_URL } from '../../config'
import axios from 'axios'

export const getSongs = () => async (dispatch, getState) => {
  const res = await axios.get(BACKEND_URL + 'get')
  const state = getState() 
  dispatch({
    type: ActionTypes.GET_LIST_FROM_DB,
    payload: res.data.songs,
    currState: state.songs    
  })
}

export const setFilterArtist = (newFilter) => async (dispatch, getState) => {
    const state = getState() 
    dispatch({
      type: ActionTypes.SET_FILTER_ARTIST,
      payload: newFilter,
      currState: state.songs
  })
}


export const setFilterGenre = (newFilter) => async (dispatch, getState) => {
  const state = getState() 
  dispatch({
    type: ActionTypes.SET_FILTER_GENRE,
    payload: newFilter,
    currState: state.songs
})
}

export const setFilterYear = (newFilter) => async (dispatch, getState) => {
  const state = getState() 
  dispatch({
    type: ActionTypes.SET_FILTER_YEAR,
    payload: newFilter,
    currState: state.songs
})
}











