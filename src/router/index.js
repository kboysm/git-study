import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TestOnePage from '../views/TestOnePage.vue'
import TestTwoPage from '../views/TestTwoPage.vue'
import TestThreePage from '../views/TestThreePage.vue'
import TestFourPage from '../views/TestFourPage.vue'
import OneLayout from '@/components/layout/OneLayout.vue'
import TwoLayout from '@/components/layout/TwoLayout.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  
 
  {
    path: '',
    name: '',
    component: OneLayout,
    children: [
      {
        path: '/testOnePage',
        name: 'testOnePage',
        component: TestOnePage
      },
      {
        path: '/testTwoPage',
        name: 'testTwoPage',
        component: TestTwoPage
      },
    ]
  },
  {
    path: '',
    name: '',
    component: TwoLayout,
    children: [
      {
        path: '/testThreePage',
        name: 'testThreePage',
        component: TestThreePage
      },
      {
        path: '/testFourPage',
        name: 'testFourPage',
        component: TestFourPage
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
