export default class UserAgent {
  get browserType() {
    const agent = navigator.userAgent
    // const browserName = navigator.appName
    switch (agent) {
      case agent.indexOf('Opera') !== -1 || agent.indexOf('OPR') !== -1:
        return '오페라'
      case agent.indexOf('Chrome') !== -1:
        return '크롬'
      case agent.indexOf('Safari') !== -1:
        return '사파리'
      case agent.indexOf('Firefox') !== -1:
        return '파이어폭스'
      case agent.indexOf('MSIE') !== -1:
        return 'IE'
      default:
        return '그외'
    }
  }
}
