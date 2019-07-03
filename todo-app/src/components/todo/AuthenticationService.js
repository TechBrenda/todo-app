class AuthenticationService {
  registerSuccessfulLogin (username, password) {
    window.sessionStorage.setItem('authenticatedUser', username)
  }

  logout () {
    window.sessionStorage.removeItem('authenticatedUser')
  }
}

export default new AuthenticationService()
