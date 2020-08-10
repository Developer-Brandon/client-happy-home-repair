export default class ContactInformation {
  constructor(type = 'pc') {
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
      if (this._type === 'pc') {
        return 'https://blog.naver.com/PostList.nhn?blogId=lain4444&from=postList&categoryNo=7'
      }
      if (this._type === 'mobile') {
        return 'https://m.blog.naver.com/PostList.nhn?blogId=lain4444&from=postList&categoryNo=7'
      }
      return 'https://blog.naver.com/PostList.nhn?blogId=lain4444&from=postList&categoryNo=7'
    }
    return window.alert('You have to insert type argument first!')
  }

  getDoorPage() {
    if (this._type !== undefined) {
      if (this._type === 'pc') {
        return 'https://blog.naver.com/PostList.nhn?blogId=lain4444&from=postList&categoryNo=40'
      }
      if (this._type === 'mobile') {
        return 'https://m.blog.naver.com/PostList.nhn?blogId=lain4444&from=postList&categoryNo=40'
      }
      return 'https://blog.naver.com/PostList.nhn?blogId=lain4444&from=postList&categoryNo=40'
    }
    return window.alert('You have to insert type argument first!')
  }

  getSecurityWindowPage() {
    if (this._type !== undefined) {
      if (this._type === 'pc') {
        return 'https://blog.naver.com/PostList.nhn?blogId=lain4444&from=postList&categoryNo=9'
      }
      if (this._type === 'mobile') {
        return 'https://m.blog.naver.com/PostList.nhn?blogId=lain4444&from=postList&categoryNo=9'
      }
      return 'https://blog.naver.com/PostList.nhn?blogId=lain4444&from=postList&categoryNo=9'
    }
    return window.alert('You have to insert type argument first!')
  }

  getPaintPage() {
    if (this._type !== undefined) {
      if (this._type === 'pc') {
        return 'https://blog.naver.com/PostList.nhn?blogId=lain4444&from=postList&categoryNo=33'
      }
      if (this._type === 'mobile') {
        return 'https://m.blog.naver.com/PostList.nhn?blogId=lain4444&from=postList&categoryNo=33'
      }
      return 'https://blog.naver.com/PostList.nhn?blogId=lain4444&from=postList&categoryNo=33'
    }
    return window.alert('You have to insert type argument first!')
  }

  getEtcPage() {
    if (this._type !== undefined) {
      if (this._type === 'pc') {
        return 'https://blog.naver.com/PostList.nhn?blogId=lain4444&from=postList&categoryNo=28&parentCategoryNo=28'
      }
      if (this._type === 'mobile') {
        return 'https://m.blog.naver.com/PostList.nhn?blogId=lain4444&from=postList&categoryNo=28&parentCategoryNo=28'
      }
      return 'https://blog.naver.com/PostList.nhn?blogId=lain4444&from=postList&categoryNo=28&parentCategoryNo=28'
    }
    return window.alert('You have to insert type argument first!')
  }

  getBlogAddress() {
    if (this._type !== undefined) {
      if (this._type === 'pc') {
        return 'https://blog.naver.com/prologue/PrologueList.nhn?blogId=lain4444&skinType=&skinId=&from=menu&userSelectMenu=true'
      }
      if (this._type === 'mobile') {
        return 'https://m.blog.naver.com/PostList.nhn?blogId=lain4444&skinType=&skinId=&from=menu&userSelectMenu=true'
      }
      return 'https://blog.naver.com/prologue/PrologueList.nhn?blogId=lain4444&skinType=&skinId=&from=menu&userSelectMenu=true'
    }
    return window.alert('You have to insert type argument first!')
  }

  getInstaAddress() {
    if (this._type !== undefined) {
      if (this._type === 'pc') {
        return ''
      }
      if (this._type === 'mobile') {
        return ''
      }
      return ''
    }
    return window.alert('You have to insert type argument first!')
  }

  getKakaoChannel() {
    if (this._type !== undefined) {
      if (this._type === 'pc') {
        return ''
      }
      if (this._type === 'mobile') {
        return ''
      }
      return ''
    }
    return window.alert('You have to insert type argument first!')
  }
}
