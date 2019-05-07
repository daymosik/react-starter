import { AppActionTypesKeys, InitDataAction, SetAppReadyAction } from '@store/action-types/app-action-types'
import { AppData } from '@store/reducers/app-reducers'
import { RootState } from '@store/reducers/root-reducers'
import axios from 'axios'
import { ThunkAction } from 'redux-thunk'

export function setAppReady(ready: boolean): SetAppReadyAction {
  return { type: AppActionTypesKeys.SET_APP_READY, payload: ready }
}

export function getInitData(): ThunkAction<Promise<AppData>, RootState, null, InitDataAction> {
  return async dispatch => {
    const data = undefined
    // const { data } = await axios.get(`/get-init-data/`)
    dispatch(getInitDataSubmit(data))
    return data
  }
}

export function getInitDataSubmit(data: AppData): InitDataAction {
  return { type: AppActionTypesKeys.SET_APP_DATA, payload: data }
}
