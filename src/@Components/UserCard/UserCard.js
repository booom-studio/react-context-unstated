import React from 'react'
import PropTypes from 'prop-types'

const UserCard = ({ context: { state, login, logout } }) => {
  if (!state.loggedIn) {
    return (
      <p>Not logged in.</p>
    )
  }

  return (
    <ul>
      <li>Name: {state.user.name}</li>
      <li>Age: {state.user.age}</li>
    </ul>
  )
}

UserCard.propTypes = {
  context: PropTypes.shape({
    state: PropTypes.object.isRequired
  }).isRequired
}

export default UserCard
