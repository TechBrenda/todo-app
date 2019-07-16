import axios from 'axios'

class TodoDataService {
  getAllTodos = (name) => {
    return axios.get(`/users/${name}/todos`)
  }
  
  getTodo = (name, id) => {
    return axios.get(`/users/${name}/todos/${id}`)
  }
  
  deleteTodo = (name, id) => {
    return axios.delete(`/users/${name}/todos/${id}`)
  }
}

export default new TodoDataService()
