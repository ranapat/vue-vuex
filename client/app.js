/**
 * App file
 *
 * o Inits vue with bootstrap
 * o Loads App components
 * o Loads router and store
 */

import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import BootstrapVue from 'bootstrap-vue'
import App from './components/App'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

sync(store, router)

Vue.use(BootstrapVue)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
