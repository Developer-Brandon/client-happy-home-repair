import axios from 'axios'

/// //////////////////////////////////////////////////////////////////////////////////////

// 만약 현재 서버를 향해 node_env를 설정했으면 server의 url로, 아니라면 local의 url로 지정합니다.

const whetherServerEnvOrNot = (process.env.NODE_ENV === 'server')

const serverOriginUrl = process.env.VUE_APP_ORIGIN_URL

const localUrl = `${process.env.VUE_APP_LOCAL_URL}:${process.env.VUE_APP_PORT}`

const dynamicLocalUrl = whetherServerEnvOrNot ? serverOriginUrl : localUrl

const localAxiosInstance = axios.create({
  baseURL: dynamicLocalUrl,
  timeout: 50000,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
})

/// //////////////////////////////////////////////////////////////////////////////////////

// 만약 현재가 prod phase이면 https 연결, 아니면 dev쪽 elasticbeanstalk으로 연결합니다.

const whetherPhaseProdOrNot = (process.env.VUE_APP_PHASE === 'prod')

const domainUrl = process.env.VUE_APP_DOMAIN_URL

const elasticBeanstalkUrl = process.env.VUE_APP_ELASTIC_BEAN_STALK_URL

const serverUrl = whetherPhaseProdOrNot ? domainUrl : elasticBeanstalkUrl

/// //////////////////////////////////////////////////////////////////////////////////////

const axiosInstance = axios.create({
  baseURL: serverUrl,
  timeout: 50000,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
})

class HhrNetwork {
  constructor() {
    axiosInstance.interceptors.response.use((response) => response, (error) => Promise.reject(error))
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

  getNotice(noticeNo = 1) {
    let requestUrl = '/notice'

    if (noticeNo !== undefined) {
      requestUrl += `?noticeNo=${noticeNo}`
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

  postFileUpload() {
  }

  postEstimateValues(params) {
    const requestUrl = '/repair'

    return new Promise((resolve, reject) => {
      axiosInstance.post(requestUrl, JSON.stringify(params))
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
