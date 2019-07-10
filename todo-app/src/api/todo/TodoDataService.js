import axios from 'axios'

class TodoDataService {
  getAllTodos = (name) => {
    return axios.get(`/users/${name}/todos`)
  }
}

export default new TodoDataService()
