// src/services/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://api-tareas.test/api', // Cambia esto por tu backend real
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
