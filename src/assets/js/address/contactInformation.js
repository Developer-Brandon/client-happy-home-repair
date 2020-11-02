import { DeviceState } from '@/assets/js/enums/DeviceState'

const PC_VERSION_URL = 'https://blog.naver.com'
const MOBILE_VERSION_URL = 'https://m.blog.naver.com'

export default class ContactInformation {
  constructor(type = DeviceState.PC) {
    this._type = type
  }

  set type(type) {
    this._type = type
  }

  getPhoneNumber() {
    return 'tel:010-9018-5553'
  }

  getWindowPage() {
    if (this._type !== undefined) {
      if (this._type === DeviceState.PC) {
        return `${PC_VERSION_URL}/PostList.nhn?blogId=lain4444&from=postList&categoryNo=7`
      }
      if (this._type === DeviceState.MOBILE) {
        return `${MOBILE_VERSION_URL}/PostList.nhn?blogId=lain4444&from=postList&categoryNo=7`
      }
      return `${PC_VERSION_URL}/PostList.nhn?blogId=lain4444&from=postList&categoryNo=7`
    }
    return window.alert('You have to insert type argument first!')
  }

  getDoorPage() {
    if (this._type !== undefined) {
      if (this._type === DeviceState.PC) {
        return `${PC_VERSION_URL}/PostList.nhn?blogId=lain4444&from=postList&categoryNo=40`
      }
      if (this._type === DeviceState.MOBILE) {
        return `${MOBILE_VERSION_URL}/PostList.nhn?blogId=lain4444&from=postList&categoryNo=40`
      }
      return `${PC_VERSION_URL}/PostList.nhn?blogId=lain4444&from=postList&categoryNo=40`
    }
    return window.alert('You have to insert type argument first!')
  }

  getSecurityWindowPage() {
    if (this._type !== undefined) {
      if (this._type === DeviceState.PC) {
        return `${PC_VERSION_URL}/PostList.nhn?blogId=lain4444&from=postList&categoryNo=9`
      }
      if (this._type === DeviceState.MOBILE) {
        return `${MOBILE_VERSION_URL}/PostList.nhn?blogId=lain4444&from=postList&categoryNo=9`
      }
      return `${PC_VERSION_URL}/PostList.nhn?blogId=lain4444&from=postList&categoryNo=9`
    }
    return window.alert('You have to insert type argument first!')
  }

  getPaintPage() {
    if (this._type !== undefined) {
      if (this._type === DeviceState.PC) {
        return `${PC_VERSION_URL}/PostList.nhn?blogId=lain4444&from=postList&categoryNo=33`
      }
      if (this._type === DeviceState.MOBILE) {
        return `${MOBILE_VERSION_URL}/PostList.nhn?blogId=lain4444&from=postList&categoryNo=33`
      }
      return `${PC_VERSION_URL}/PostList.nhn?blogId=lain4444&from=postList&categoryNo=33`
    }
    return window.alert('You have to insert type argument first!')
  }

  getEtcPage() {
    if (this._type !== undefined) {
      if (this._type === DeviceState.PC) {
        return `${PC_VERSION_URL}/PostList.nhn?blogId=lain4444&from=postList&categoryNo=28&parentCategoryNo=28`
      }
      if (this._type === DeviceState.MOBILE) {
        return `${MOBILE_VERSION_URL}/PostList.nhn?blogId=lain4444&from=postList&categoryNo=28&parentCategoryNo=28`
      }
      return `${PC_VERSION_URL}/PostList.nhn?blogId=lain4444&from=postList&categoryNo=28&parentCategoryNo=28`
    }
    return window.alert('You have to insert type argument first!')
  }

  getBlogAddress() {
    if (this._type !== undefined) {
      if (this._type === DeviceState.PC) {
        return `${PC_VERSION_URL}/prologue/PrologueList.nhn?blogId=lain4444&skinType=&skinId=&from=menu&userSelectMenu=true`
      }
      if (this._type === DeviceState.MOBILE) {
        return `${MOBILE_VERSION_URL}/PostList.nhn?blogId=lain4444&skinType=&skinId=&from=menu&userSelectMenu=true`
      }
      return `${PC_VERSION_URL}/prologue/PrologueList.nhn?blogId=lain4444&skinType=&skinId=&from=menu&userSelectMenu=true`
    }
    return window.alert('You have to insert type argument first!')
  }

  getInstaAddress() {
    if (this._type !== undefined) {
      if (this._type === DeviceState.PC) {
        return ''
      }
      if (this._type === DeviceState.MOBILE) {
        return ''
      }
      return ''
    }
    return window.alert('You have to insert type argument first!')
  }

  getKakaoChannel() {
    if (this._type !== undefined) {
      if (this._type === DeviceState.PC) {
        return ''
      }
      if (this._type === DeviceState.MOBILE) {
        return ''
      }
      return ''
    }
    return window.alert('You have to insert type argument first!')
  }
}
