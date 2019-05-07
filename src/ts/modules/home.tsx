import { i18nString } from '@i18n/index'
import * as React from 'react'

export default class HomeView extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return <div>{i18nString('home')}</div>
  }
}
