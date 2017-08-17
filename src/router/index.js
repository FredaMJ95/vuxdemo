import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const index = resolve => require(['../views/index'], resolve)
const first = resolve => require(['../views/first'], resolve)
const second = resolve => require(['../views/second'], resolve)

export default new Router({
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
            }]
        }
    ]
})