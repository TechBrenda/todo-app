import axios from 'axios'

class HelloWorldService {
  getBasicAuthConfig = () => {
    return {
      auth: {
        username: process.env.REACT_APP_TODO_API_USER,
        password: process.env.REACT_APP_TODO_API_PASS
      } 
    }
  }
  
  executeHelloWorldService = () => {
    return axios.get('/hello-world')
  }
  
  executeHelloWorldBeanService = () => {
    return axios.get('/hello-world-bean')
  }
  
  executeHelloWorldPathVariableService = (name) => {
    return axios.get(`/hello-world/${name}`, this.getBasicAuthConfig())
  }
}

export default new HelloWorldService()
