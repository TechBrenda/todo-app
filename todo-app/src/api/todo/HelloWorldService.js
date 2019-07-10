import axios from 'axios'

class HelloWorldService {
  executeHelloWorldService = () => {
    return axios.get('/hello-world')
  }
  
  executeHelloWorldBeanService = () => {
    return axios.get('/hello-world-bean')
  }
  
  executeHelloWorldPathVariableService = (name) => {
    return axios.get(`/hello-world/${name}`)
  }
}

export default new HelloWorldService()
