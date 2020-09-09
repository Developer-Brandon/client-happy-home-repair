import Vue from 'vue'
import meta from 'vue-meta'
import mixin from '@/assets/js/global/mixin'
import router from '@/router'
import store from '@/store'
import App from '@/App'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(meta)
Vue.mixin(mixin)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
