import Vue from 'vue'
import Vuex from 'vuex'

import app from './App'
import home from './modules/Home'
import about from './modules/About'
import estimate from './modules/Estimate'
import notice from './modules/Notice'
import products from './modules/Products'

Vue.use(Vuex)

const entryPointOfStore = () => new Vuex.Store({
  namespaced: true,
  modules: {
    app,
    home,
    about,
    estimate,
    notice,
    products,
  },
})

export default entryPointOfStore()
