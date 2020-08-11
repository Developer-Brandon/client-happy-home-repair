import Vue from 'vue'
import Vuex from 'vuex'

import About from './modules/About'
import Home from './modules/Home'
import Estimate from './modules/Estimate'
import Notice from './modules/Notice'
import Products from './modules/Products'

Vue.use(Vuex)

const entryPointOfStore = () => new Vuex.Store({
  namespaced: true,
  modules: {
    About,
    Home,
    Estimate,
    Notice,
    Products,
  },
})

export default entryPointOfStore()
