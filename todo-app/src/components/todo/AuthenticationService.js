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

  executeJwtAuthentication = (username, password) => {
    return axios.post('/authenticate', {
      username,
      password
    })
  }

  createBasicAuthToken = (username, password) => {
    return 'Basic ' + window.btoa(username + ':' + password)
  }

  registerSuccessfulLogin = (username, password) => {
    window.sessionStorage.setItem(process.env.REACT_APP_SESSION_KEY_USER, username)
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
  }

  createJwtToken = token => {
    return 'Bearer ' + token
  }

  registerJwtLogin = (username, token) => {
    window.sessionStorage.setItem(process.env.REACT_APP_SESSION_KEY_USER, username)
    window.sessionStorage.setItem(process.env.REACT_APP_SESSION_KEY_TOKEN, token)
    this.setupAxiosInterceptors(
      this.createJwtToken(this.getToken(process.env.REACT_APP_SESSION_KEY_TOKEN))
    )
  }

  isUserLoggedIn = () => {
    return window.sessionStorage.getItem(process.env.REACT_APP_SESSION_KEY_USER) !== null
  }

  getUser = () => {
    let user = window.sessionStorage.getItem(process.env.REACT_APP_SESSION_KEY_USER)
    if (user === null) {
      return ''
    } else {
      return user
    }
  }

  getToken = () => {
    let token = window.sessionStorage.getItem(process.env.REACT_APP_SESSION_KEY_TOKEN)
    if (token === null) {
      return ''
    } else {
      return token
    }
  }
  
  reloadToken = () => {
    let token = this.getToken()
    if (token !== '') {
      this.setupAxiosInterceptors(
        this.createJwtToken(this.getToken(process.env.REACT_APP_SESSION_KEY_TOKEN))
      )
    }
    return token
  }

  logout = () => {
    window.sessionStorage.removeItem(process.env.REACT_APP_SESSION_KEY_USER)
    window.sessionStorage.removeItem(process.env.REACT_APP_SESSION_KEY_TOKEN)
  }

  setupAxiosInterceptors = authToken => {
    axios.interceptors.request.use(config => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = authToken
      }
      return config
    })
  }
}

export default new AuthenticationService()
