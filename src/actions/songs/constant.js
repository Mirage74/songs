import {
  getActionType
} from "../utils"

export const prefix = "action.songs"
export const GET_LIST_FROM_DB = getActionType(prefix)("GET_LIST_FROM_DB")
export const GET_SONG = getActionType(prefix)("GET_SONG")
export const ADD_SONG = getActionType(prefix)("ADD_SONG")
export const UPD_SONG = getActionType(prefix)("UPD_SONG")
export const DEL_SONG = getActionType(prefix)("DEL_SONG")








