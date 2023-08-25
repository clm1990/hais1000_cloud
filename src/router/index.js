import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Project from '../components/Project.vue'
import DataLog from '../components/DataLog.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes :[
        {
            path: '/',
            redirect: '/login'
          },
          // 登录路由
          {
            path: '/login',
            name: 'login',
            component: () => import('../views/login/index.vue')
          }, 
        {
            path: '/home',
            component: Home             
        },
        {
            path: '/project',
            component: Project             
        },
        {
            path: '/datalog',
            component: DataLog             
        }
    ]

})