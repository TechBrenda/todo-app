import axios from 'axios'

class TodoDataService {
  getAllTodos = (name) => {
    return axios.get(`/users/${name}/todos`)
  }
  
  deleteTodo = (name, id) => {
    return axios.delete(`/users/${name}/todos/${id}`)
  }
}

export default new TodoDataService()
