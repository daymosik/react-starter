import { AppData } from '@store/reducers/app-reducers'

export enum AppActionTypesKeys {
  SET_APP_READY = 'SET_APP_READY',
  SET_APP_DATA = 'SET_APP_DATA',
}

export interface SetAppReadyAction {
  type: AppActionTypesKeys.SET_APP_READY
  payload: boolean
}

export interface InitDataAction {
  type: AppActionTypesKeys.SET_APP_DATA
  payload: AppData
}

export type AppActionTypes = SetAppReadyAction | InitDataAction
