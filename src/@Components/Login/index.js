import React from 'react'
import { UserConsumer } from '@Providers/UserProvider'

import Login from './Login'

export default props => (
  <UserConsumer>
    {userContext => <Login userContext={userContext} {...props} />}
  </UserConsumer>
)
