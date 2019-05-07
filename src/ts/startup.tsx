import { getInitData, setAppReady } from '@store/actions/app-actions'
import { RootState } from '@store/reducers/root-reducers'
import * as React from 'react'
import { connect } from 'react-redux'

export interface StartupViewReduxProps {
  appReady: boolean
}

export interface StartupViewReduxDispatch {
  setAppReady: typeof setAppReady
  getInitData: typeof getInitData
}

export type StartupViewProps = StartupViewReduxProps & StartupViewReduxDispatch

export interface StartupViewState {
  loading: boolean
}

export class StartupViewComponent extends React.PureComponent<StartupViewProps, StartupViewState> {
  public constructor(props) {
    super(props)

    this.state = {
      loading: true,
    }
  }

  public async componentDidMount() {
    if (!this.props.appReady) {
      await this.initializeData()
    }
    this.props.setAppReady(true)
  }

  public render() {
    return (
      <div>
        {/* TODO: global loading component */}
        {!this.props.appReady ? <div>Loading</div> : this.props.children}
      </div>
    )
  }

  public initializeData = async (): Promise<void> => {
    await this.props.getInitData()
    this.props.setAppReady(true)
  }
}

const mapStateToProps = (state: RootState): StartupViewReduxProps => ({
  appReady: state.appState.appReady,
})

const mapDispatchToProps = dispatch => ({
  setAppReady: ready => dispatch(setAppReady(ready)),
  getInitData: () => dispatch(getInitData()),
})

const StartupView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StartupViewComponent)

export default StartupView
