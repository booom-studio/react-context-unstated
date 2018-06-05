import React from 'react'
import PropTypes from 'prop-types'

const UserContext = React.createContext()

export const UserConsumer = UserContext.Consumer

export default class UserProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  state = {
    loggedIn: false,
    loading: false
  }

  login = async () => {
    this.setState({ loading: true })

    await new Promise(resolve => {
      setTimeout(() => {
        this.setState({
          loggedIn: true,
          loading: false,
          user: {
            name: 'Jenő',
            age: 87
          }
        })
        resolve()
      }, 1000)
    })
  }

  logout = () => {
    this.setState({ loggedIn: false })
  }

  render () {
    const { children } = this.props

    return (
      <UserContext.Provider
        value={{
          state: this.state,
          login: this.login,
          logout: this.logout
        }}
      >
        {children}
      </UserContext.Provider>
    )
  }
}
