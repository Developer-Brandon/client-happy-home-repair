import axios from 'axios'

const whetherServerEnvOrNot = (process.env.NODE_ENV === 'server')
const portNumber = process.env.VUE_APP_PORT
// const apiUrl = process.env.WEB_API_URL
const s3Url = process.env.VUE_APP_S3_URL
const localUrl = `http://localhost:${portNumber}`

const baseUrl = whetherServerEnvOrNot ? s3Url : localUrl

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json' },
})

class HhrNetwork {
  constructor() {
    axiosInstance.interceptors.response.use((response) => response, (error) => Promise.reject(error))
  }

  getBaseUrl() {
    return baseUrl
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

  getBlogList(offset, limit) {
    return new Promise((resolve, reject) => {
      axiosInstance.get(`/blog/list?${offset}&${limit}`)
        .then((response) => {
          resolve(response)
        }).catch((error) => {
          reject(error)
        })
    })
  }

  getNoticeList(offset, limit) {
    return new Promise((resolve, reject) => {
      axiosInstance.get(`/notice/list?${offset}&${limit}`)
        .then((response) => {
          resolve(response)
        }).catch((error) => {
          reject(error)
        })
    })
  }

  postFileUpload() {}

  postEstimateValues() {}
}

const network = new HhrNetwork()
export default network
