import { combineReducers } from 'redux'
import { SongsTypes } from '../../actions'
import { SHOW_ALL } from '../../config'

const INITIAL_STATE = {
  songs: [],
  fArtist: "",
  fGenre: "",
  fYear: 0
}

const currList = (state = INITIAL_STATE.songs, { type, payload }) => {
  switch (type) {
    case SongsTypes.GET_LIST_FROM_DB:
      return payload;
    default:
      return state;
  }
}

const filterArtist = (state = INITIAL_STATE.fArtist, { type, payload }) => {
  let filt = ""
  if (payload !== SHOW_ALL) {
    filt = payload
  }
  switch (type) {
    case SongsTypes.SET_FILTER_ARTIST:
      return filt;
    default:
      return state;
  }
}

const filterGenre = (state = INITIAL_STATE.fGenre, { type, payload }) => {
  let filt = ""
  if (payload !== SHOW_ALL) {
    filt = payload
  }
  switch (type) {
    case SongsTypes.SET_FILTER_GENRE:
      return filt;
    default:
      return state;
  }
}

const filterYear = (state = INITIAL_STATE.fYear, { type, payload }) => {
  let filt = ""
  if (payload !== SHOW_ALL) {
    filt = payload
  }
  switch (type) {
    case SongsTypes.SET_FILTER_YEAR:
      return filt;
    default:
      return state;
  }
}



const filteredList = (state = INITIAL_STATE.songs, { type, payload, currState }) => {
  let fArr
  switch (type) {
    case SongsTypes.GET_LIST_FROM_DB:
      fArr = [...payload]
      if (currState.filterArtist.length > 0) {
        fArr = fArr.filter(item => item[1] === currState.filterArtist)
      }
      if (currState.filterGenre.length > 0) {
        fArr = fArr.filter(item => item[2] === currState.filterGenre)
      }
      if (currState.filterYear > 0) {
        fArr = fArr.filter(item => item[3] === parseInt(currState.filterYear))
      }
      return fArr;

    case SongsTypes.SET_FILTER_ARTIST:
      fArr = [...currState.currList]
      if (payload !== SHOW_ALL) {
        fArr = fArr.filter(item => item[1] === payload)
      }
      if (currState.filterGenre.length > 0) {
        fArr = fArr.filter(item => item[2] === currState.filterGenre)
      }
      if (currState.filterYear > 0) {
        fArr = fArr.filter(item => item[3] === parseInt(currState.filterYear))
      }
      return fArr;

    case SongsTypes.SET_FILTER_GENRE:
      fArr = [...currState.currList]
      if (payload !== SHOW_ALL) {
        fArr = fArr.filter(item => item[2] === payload)
      }
      if (currState.filterArtist.length > 0) {
        fArr = fArr.filter(item => item[1] === currState.filterArtist)
      }
      if (currState.filterYear > 0) {
        fArr = fArr.filter(item => item[3] === parseInt(currState.filterYear))
      }
      return fArr;

    case SongsTypes.SET_FILTER_YEAR:
      fArr = [...currState.currList]
      if (payload !== SHOW_ALL) {
        fArr = fArr.filter(item => item[3] === parseInt(payload))
      }
      if (currState.filterArtist.length > 0) {
        fArr = fArr.filter(item => item[1] === currState.filterArtist)
      }
      if (currState.filterGenre.length > 0) {
        fArr = fArr.filter(item => item[2] === currState.filterGenre)
      }
      return fArr;
    default:
      return state;
  }
}

export default combineReducers({
  currList,
  filterArtist,
  filterGenre,
  filterYear,
  filteredList
})

