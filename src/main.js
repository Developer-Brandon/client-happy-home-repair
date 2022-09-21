import Vue from 'vue'
import meta from 'vue-meta'
import mixin from '@/assets/js/global/mixin'
import router from '@/router'
import store from '@/store'
import App from '@/App.vue'
import VueTheMask from 'vue-the-mask'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// eslint-disable-next-line
import '@/assets/js/global/filter'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV !== 'production'

Vue.use(meta)
Vue.mixin(mixin)
Vue.use(VueTheMask)
// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
