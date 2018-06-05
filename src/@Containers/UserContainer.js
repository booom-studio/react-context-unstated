import { Container } from 'unstated'

export default class UserContainer extends Container {
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
}
