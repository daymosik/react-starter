import { AppActionTypes, AppActionTypesKeys } from '@store/action-types/app-action-types'

// any should not be used
export type AppData = any

export interface AppState {
  appReady: boolean
  appData: AppData
}

const initialState: AppState = {
  appReady: false,
  appData: undefined,
}

const appState = (state: AppState = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case AppActionTypesKeys.SET_APP_READY:
      return { ...state, appReady: action.payload }
    case AppActionTypesKeys.SET_APP_DATA:
      return { ...state, appData: action.payload }
    default:
      return state
  }
}

export default appState
