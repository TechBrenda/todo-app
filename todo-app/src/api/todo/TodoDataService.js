import axios from 'axios'

class TodoDataService {
  createTodo = (name, todo) => {
    return axios.post(`/users/${name}/todos`, todo)
  }

  getAllTodos = name => {
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
