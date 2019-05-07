import store, { createFakeStore, fakeStoreState } from '@fakes/fake-store'
import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import { Provider } from 'react-redux'
import StartupView, { StartupViewComponent, StartupViewProps, StartupViewState } from '../../src/ts/startup'

type Wrapper = ShallowWrapper<StartupViewProps, StartupViewState, StartupViewComponent>

describe('StartupView', () => {
  let vm: Wrapper

  beforeEach(() => {
    vm = shallow(
      <Provider store={store}>
        <StartupView>
          <div>a</div>
        </StartupView>
      </Provider>,
      { context: { store } },
    )
  })

  it('should show loading', () => {
    expect(vm.html()).toEqual('<div><div>Loading</div></div>')
  })

  it('should show children', () => {
    const fakeStore = createFakeStore({
      ...fakeStoreState,
      appState: {
        ...fakeStoreState.appState,
        appReady: true,
      },
    })

    vm = shallow(
      <Provider store={fakeStore}>
        <StartupView>
          <div>a</div>
        </StartupView>
      </Provider>,
      { context: { store } },
    )

    expect(vm.html()).toEqual('<div><div>a</div></div>')
  })
})
