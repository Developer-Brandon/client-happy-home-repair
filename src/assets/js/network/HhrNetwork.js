import axios from 'axios'

const whetherServerEnvOrNot = (process.env.NODE_ENV === 'server')
const baseUrl = whetherServerEnvOrNot ? 'http://hhr-client-app.s3-website.ap-northeast-2.amazonaws.com' : 'http://localhost:8080'

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json' },
})

class HhrNetwork {
  constructor() {
    axiosInstance.interceptors.response.use((response) => response, (error) => Promise.reject(error))
  }

  getLocalFile(filename) {
    return new Promise((resolve, reject) => {
      axiosInstance.get(`/${filename}.html`)
        .then((response) => {
          resolve(response)
        }).catch((error) => {
          reject(error)
        })
    })
  }
}

const network = new HhrNetwork()
export default network
