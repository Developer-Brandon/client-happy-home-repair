import Vue from 'vue'
import Vuex from 'vuex'

import app from './App'
import about from './modules/About'
import home from './modules/Home'
import estimate from './modules/Estimate'
import notice from './modules/Notice'
import products from './modules/Products'

Vue.use(Vuex)

const entryPointOfStore = () => new Vuex.Store({
  namespaced: true,
  modules: {
    app,
    about,
    home,
    estimate,
    notice,
    products,
  },
})

export default entryPointOfStore()
