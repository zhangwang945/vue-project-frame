// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import promise from 'es6-promise';
promise.polyfill();
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App'
import routerConfig from './router'
import data from './store'

Vue.use(Vuex)
Vue.use(VueRouter)
const store = new Vuex.Store({ ...data
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: new VueRouter(routerConfig),
  store,
  render: h => h(App)
})
