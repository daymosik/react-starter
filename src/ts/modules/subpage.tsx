import { i18nString } from '@i18n/index'
import * as React from 'react'

export default class SubpageView extends React.Component<{}, {}> {
  public render(): React.ReactNode {
    return <div>{i18nString('subpage')}</div>
  }
}
