import React from 'react'
import { Subscribe } from 'unstated'

import UserContainer from '@Containers/UserContainer'

import UserCard from './UserCard'

export default props => (
  <Subscribe to={[UserContainer]}>
    {context => <UserCard context={context} {...props} />}
  </Subscribe>
)
