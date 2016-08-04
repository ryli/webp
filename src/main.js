import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from './router-config'
import { sync } from 'vuex-router-sync'
import VueTouch from 'vue-touch'
import store from './vuex/store'
import App from './App.vue'
require('es6-promise').polyfill()
require('isomorphic-fetch')

Vue.use(VueTouch)
VueTouch.registerCustomEvent('doubletap', {
  type: 'tap',
  taps: 2
})

Vue.use(VueRouter)

const router = new VueRouter({
  // root: '/v_cms',
  history: true,
  saveScrollPosition: false
})

configRouter(router)

// keep vue-router and vuex store in sync
sync(store, router)

router.start(App, '#app')

// just for debugging
window.router = router
