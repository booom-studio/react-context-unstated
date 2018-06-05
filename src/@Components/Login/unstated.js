import React from 'react'
import { Subscribe } from 'unstated'

import UserContainer from '@Containers/UserContainer'

import Login from './Login'

export default props => (
  <Subscribe to={[UserContainer]}>
    {context => <Login context={context} {...props} />}
  </Subscribe>
)
