import Vue from 'vue'
import meta from 'vue-meta'
import mixin from '@/assets/js/global/mixin'
import router from '@/router'
import store from '@/store'
import App from '@/App.vue'
import VueTheMask from 'vue-the-mask'
// eslint-disable-next-line
import '@/assets/js/global/filter'

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV !== 'production'

Vue.use(meta)
Vue.mixin(mixin)
Vue.use(VueTheMask)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
