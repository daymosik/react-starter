import '@assets/styles/app.scss'
import CustomRoute from '@components/custom-route'
import HomeView from '@modules/home'
import SubpageView from '@modules/subpage'
import MainLayoutView from '@slices/main-layout'
import store from '@store/index'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Switch } from 'react-router-dom'
import StartupView from './startup'

export enum NavigationPath {
  Home = '/',
  Subpage = '/subpage',
}

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Provider store={store}>
        <StartupView>
          <HashRouter basename="/">
            <Switch>
              <CustomRoute exact={true} component={HomeView} path={NavigationPath.Home} layout={MainLayoutView} />
              <CustomRoute component={SubpageView} path={NavigationPath.Subpage} layout={MainLayoutView} />
            </Switch>
          </HashRouter>
        </StartupView>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
