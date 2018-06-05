import React from 'react'

import UserProvider from '@Providers/UserProvider'
import Login from '@Components/Login'
import UserCard from '@Components/UserCard'

export default () => (
  <UserProvider>
    <h1>React Context API</h1>
    <Login />
    <UserCard />
  </UserProvider>
)
