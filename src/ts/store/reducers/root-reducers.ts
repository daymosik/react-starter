import appState, { AppState } from '@store/reducers/app-reducers'
import { combineReducers, Reducer } from 'redux'

export interface RootState {
  appState: AppState
}

const rootReducer: Reducer<RootState> = combineReducers({
  appState,
})

export default rootReducer
