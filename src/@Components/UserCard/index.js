import React from 'react'
import { UserConsumer } from '@Providers/UserProvider'

import UserCard from './UserCard'

export default props => (
  <UserConsumer>
    {context => <UserCard context={context} {...props} />}
  </UserConsumer>
)
