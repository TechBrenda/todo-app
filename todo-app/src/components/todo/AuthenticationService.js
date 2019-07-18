import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

class AuthenticationService {
  registerSuccessfulLogin (username, password) {
    window.sessionStorage.setItem('authenticatedUser', username)
    this.setupAxiosInterceptors()
  }

  isUserLoggedIn () {
    return window.sessionStorage.getItem('authenticatedUser') !== null
  }

  getUser () {
    let user = window.sessionStorage.getItem('authenticatedUser')
    if (user === null) {
      return ''
    } else {
      return user
    }
  }

  logout () {
    window.sessionStorage.removeItem('authenticatedUser')
  }

  setupAxiosInterceptors = () => {
    axios.interceptors.request.use(config => {
      if (this.isUserLoggedIn()) {
        config.auth = {
          username: process.env.REACT_APP_TODO_API_USER,
          password: process.env.REACT_APP_TODO_API_PASS
        }
        console.log(config)
      }
      return config
    })
  }
}

export default new AuthenticationService()
