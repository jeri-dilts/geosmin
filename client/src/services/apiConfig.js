import axios from 'axios'

const getToken = () => {
  return new Promise(resolve => {
    resolve(`Bearer ${localStorage.getItem('token') || null}`)
  })
}

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? 'https://geosmin.herokuapp.com/api'
    : 'http://localhost:3000/api'
})

api.interceptors.request.use(async function (options) {
  console.log(options.headers)
  options.headers['Authorization'] = await getToken()
  console.log(options.headers)
  return options
}, function (error) {
  console.log('Request error: ', error)
  return Promise.reject(error)
});

export default api