import axios from 'axios'

const instance = axios.create({baseURL: 'http://localhost:8080/ic_rest_interfaces_test/api'})

localStorage.getItem('token') && (instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token'))


export default instance
