import React from 'react'
import PropTypes from 'prop-types'

const Login = ({ context: { state, login, logout } }) => (
  <button disabled={state.loading} onClick={state.loggedIn ? logout : login}>
    {state.loggedIn ? 'Log out' : 'Log in'}
  </button>
)

Login.propTypes = {
  context: PropTypes.shape({
    state: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
  }).isRequired
}

export default Login
