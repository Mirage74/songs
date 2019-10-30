import {
  getActionType
} from "../utils"

export const prefix = "action.songs"
export const GET_LIST_FROM_DB = getActionType(prefix)("GET_LIST_FROM_DB")
export const SET_LIST_SONGS = getActionType(prefix)("SET_LIST_SONGS")
export const ADD_SONG = getActionType(prefix)("ADD_SONG")
export const UPD_SONG = getActionType(prefix)("UPD_SONG")
export const DEL_SONG = getActionType(prefix)("DEL_SONG")

export const SET_FILTER_ARTIST = getActionType(prefix)("SET_FILTER_ARTIST")
export const SET_FILTER_GENRE = getActionType(prefix)("SET_FILTER_GENRE")
export const SET_FILTER_YEAR = getActionType(prefix)("SET_FILTER_YEAR")













