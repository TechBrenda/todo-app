import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

class AuthenticationService {
  executeBasicAuthentication = (username, password) => {
    return axios.get('/basicauth', {
      headers: {
        authorization: this.createBasicAuthToken(username, password)
      }
    })
  }

  createBasicAuthToken = (username, password) => {
    return 'Basic ' + window.btoa(username + ':' + password)
  }

  registerSuccessfulLogin = (username, password) => {
    window.sessionStorage.setItem('authenticatedUser', username)
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
  }

  isUserLoggedIn = () => {
    return window.sessionStorage.getItem('authenticatedUser') !== null
  }

  getUser = () => {
    let user = window.sessionStorage.getItem('authenticatedUser')
    if (user === null) {
      return ''
    } else {
      return user
    }
  }

  logout = () => {
    window.sessionStorage.removeItem('authenticatedUser')
  }

  setupAxiosInterceptors = authToken => {
    axios.interceptors.request.use(config => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = authToken
        console.log(config)
      }
      return config
    })
  }
}

export default new AuthenticationService()
