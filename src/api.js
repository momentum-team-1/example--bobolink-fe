import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:8000/api'
})

export function getToken (username, password) {
  return request.post('/auth/token/login/', {
    username: username,
    password: password
  }).then(res => res.data.auth_token)
}

export function getLinkData (url, token) {
  return request.get(url, {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => res.data)
}

export function getMyLinkData (token) {
  return getLinkData('/links/', token)
}

export function getFollowedLinkData (token) {
  return getLinkData('/links/followed/', token)
}

export function getAllLinkData (token) {
  return getLinkData('/links/all/', token)
}
