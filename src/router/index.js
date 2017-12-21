import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const index = resolve => require(['../views/index'], resolve)
const first = resolve => require(['../views/first'], resolve)
const second = resolve => require(['../views/second'], resolve)
const map = resolve => require(['../views/map'], resolve)
const check = resolve => require(['../views/checklist'], resolve)

export default new Router({
  mode: 'history',
  routes: [{
      path: '*',
      beforeEnter: (to, from, next) => {
        next("/first")
      }
    },
    { //首页
      path: '/index',
      name: 'index',
      component: index,
      children: [{
          path: '/first',
          name: 'first',
          component: first
        }, {
          path: '/second',
          name: 'second',
          component: second
        }, {
          path: '/map',
          name: 'map',
          component: map
        },
        {
          path: '/check',
          name: 'check',
          component: check
        }
      ]
    }
  ]
})