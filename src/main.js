import Vue from 'vue'
import meta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(meta)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
