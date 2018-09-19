// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Hi from '@/components/hi'


export default {
  mode: 'history',
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: () => {
      return import ('../view/HelloWorld')
    }
  }, {
    path: '/hi/index.html',
    name: 'hi',
    component: () => {
      return import ('../view/hi')
    }
  }, {
    path: '/hi/hi/index.html',
    name: 'hihi',
    component: () => {
      return import ('../view/hi')
    },
    children: [{
      path: '/hi/hi/hi',
      component: () => {
        return import ('../view/hi')
      }
    }]
  }]
}
