import axios from 'axios'

class TodoDataService {
  createTodo = (name, todo) => {
    return axios.post(`/jpa/users/${name}/todos`, todo)
  }

  getAllTodos = name => {
    return axios.get(`/jpa/users/${name}/todos`)
  }

  getTodo = (name, id) => {
    return axios.get(`/jpa/users/${name}/todos/${id}`)
  }

  updateTodo = (name, id, todo) => {
    return axios.put(`/jpa/users/${name}/todos/${id}`, todo)
  }

  deleteTodo = (name, id) => {
    return axios.delete(`/jpa/users/${name}/todos/${id}`)
  }
}

export default new TodoDataService()
