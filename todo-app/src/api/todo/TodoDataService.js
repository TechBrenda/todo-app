import axios from 'axios'

class TodoDataService {
  getAllTodos = (name) => {
    return axios.get(`/users/${name}/todos`)
  }
  
  getTodo = (name, id) => {
    return axios.get(`/users/${name}/todos/${id}`)
  }
  
  updateTodo = (name, id, todo) => {
    return axios.put(`/users/${name}/todos/${id}`, todo)
  }
  
  deleteTodo = (name, id) => {
    return axios.delete(`/users/${name}/todos/${id}`)
  }
}

export default new TodoDataService()
