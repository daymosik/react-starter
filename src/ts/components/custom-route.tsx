import * as React from 'react'
import { Route } from 'react-router-dom'

const CustomRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={
      // tslint:disable-next-line jsx-no-lambda
      props => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )
    }
  />
)

export default CustomRoute
