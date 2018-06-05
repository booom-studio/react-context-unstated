import React from 'react'

import { Provider } from 'unstated'
import Login from '@Components/Login/unstated'
import UserCard from '@Components/UserCard/unstated'

export default () => (
  <Provider>
    <h1>Unstated</h1>
    <Login />
    <UserCard />
  </Provider>
)
