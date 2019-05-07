import { RootState } from '@store/reducers/root-reducers'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

export const createFakeStore = (customState: RootState) => mockStore(customState)

export const fakeStoreState: RootState = {
  appState: {
    appReady: false,
    appData: undefined,
  },
}
const store = mockStore(fakeStoreState)

export default store
