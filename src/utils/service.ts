import axios from 'axios'

import { message } from './native-api'
import progress from './progress'

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
})

service.interceptors.request.use(
  (config) => {
    progress.start()
    return config
  },
  (error) => {
    progress.done()
    console.log('@request error', error)

    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  (response) => {
    progress.done()
    return response
  },
  (error) => {
    progress.done()
    console.log('@response error', error)
    message.error(error.message)

    return Promise.reject(error)
  },
)

export default service
