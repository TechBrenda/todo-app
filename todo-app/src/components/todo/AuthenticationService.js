import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

class AuthenticationService {
  registerSuccessfulLogin (username, password) {
    let auth = {
      username,
      password
    }
    window.sessionStorage.setItem('authenticatedUser', username)
    this.setupAxiosInterceptors(auth)
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

  setupAxiosInterceptors = (auth) => {
    axios.interceptors.request.use(config => {
      if (this.isUserLoggedIn()) {
        config.auth = auth
        console.log(config)
      }
      return config
    })
  }
}

export default new AuthenticationService()
