import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

export default class MainLayoutView extends React.PureComponent<RouteComponentProps<any>, {}> {
  public render(): React.ReactNode {
    return <div className="main-layout">{this.props.children}</div>
  }
}
