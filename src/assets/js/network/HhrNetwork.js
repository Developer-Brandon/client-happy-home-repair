import axios from 'axios'

const whetherServerEnvOrNot = (process.env.NODE_ENV === 'server')
const portNumber = process.env.VUE_APP_PORT
const s3Url = process.env.VUE_APP_S3_URL
const localUrl = `http://localhost:${portNumber}`

const baseUrl = whetherServerEnvOrNot ? s3Url : localUrl

const serverUrl = 'http://happy-home-repair-env.eba-atufrayj.ap-northeast-2.elasticbeanstalk.com'

const axiosInstance = axios.create({
  baseURL: serverUrl,
  timeout: 50000,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
})

const localAxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 50000,
  withCredentials: true,
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
      localAxiosInstance.get(`/${filename}.html`)
        .then((response) => {
          resolve(response)
        }).catch((error) => {
          reject(error)
        })
    })
  }

  getBlogList() {
    return new Promise((resolve, reject) => {
      axiosInstance.get('/blog/list')
        .then((response) => {
          resolve(response)
        }).catch((error) => {
          reject(error)
        })
    })
  }

  getNoticeList(currentPage = 1) {
    let requestUrl = '/notice/list'

    if (currentPage !== undefined) {
      requestUrl += `?currentPage=${currentPage}`
    }

    return new Promise((resolve, reject) => {
      axiosInstance.get(requestUrl)
        .then((response) => {
          resolve(response)
        }).catch((error) => {
          reject(error)
        })
    })
  }

  getNoticeCount() {
    return new Promise((resolve) => {
      axiosInstance.get('/notice/count')
        .then((reesponse) => {
          resolve(reesponse)
        })
    })
  }

  postFileUpload() {}

  postEstimateValues() {}
}

const network = new HhrNetwork()
export default network
