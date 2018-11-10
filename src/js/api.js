import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001'
})

export const loadTodos = () => api.get('todos')
export const saveTodo = (todo) => api.post('todos', todo)

const apis = {
    loadTodos,
    saveTodo
}

export default apis