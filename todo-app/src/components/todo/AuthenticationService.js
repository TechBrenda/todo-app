class AuthenticationService {
  registerSuccessfulLogin (username, password) {
    window.sessionStorage.setItem('authenticatedUser', username)
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
}

export default new AuthenticationService()
