import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:8000/api'
})

export function getToken (username, password) {
  return request.post('/auth/token/login', {
    username: username,
    password: password
  }).then(res => res.data.auth_token)
}
