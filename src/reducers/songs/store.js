import { combineReducers } from 'redux';
import { SongsTypes } from '../../actions';

const INITIAL_STATE = {
  songs: []
}

const currList = (state = INITIAL_STATE.songs, { type, payload }) => {
  switch (type) {
    case SongsTypes.GET_LIST_FROM_DB:
      return payload;
    default:
      return state;
  }
}


export default combineReducers({
  currList
})

