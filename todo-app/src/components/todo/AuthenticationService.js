class AuthenticationService {
  registerSuccessfulLogin (username, password) {
    window.sessionStorage.setItem('authenticatedUser', username)
  }

  isUserLoggedIn () {
    const user = window.sessionStorage.getItem('authenticatedUser')
    return (user !== null)
  }

  logout () {
    window.sessionStorage.removeItem('authenticatedUser')
  }
}

export default new AuthenticationService()
