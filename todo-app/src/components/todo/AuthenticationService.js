class AuthenticationService {
  registerSuccessfulLogin (username, password) {
    window.sessionStorage.setItem('authenticatedUser', username)
  }

  isUserLoggedIn () {
    const user = window.sessionStorage.getItem('authenticatedUser')
    if (user === null) {
      return false
    } else {
      return true
    }
  }

  logout () {
    window.sessionStorage.removeItem('authenticatedUser')
  }
}

export default new AuthenticationService()
