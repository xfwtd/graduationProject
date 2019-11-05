import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login/index.vue'
import Index from '@/views/Index/index.vue'
import IndexPage from '@/components/pages/Index/index.vue'
import PMpage from '@/components/pages/PMpage/index.vue'
import AddPM from '@/components/pages/AddPM/index.vue'
import AddSite from '@/components/pages/AddSite/index.vue'
import EditSite from '@/components/pages/EditSite/index.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'/',
          name:'IndexPage',
          component:IndexPage
        },
        {
          path:'PMpage',
          name:'PMpage',
          component:PMpage
        },
        {
          path:'addpm',
          name:'AddPM',
          component:AddPM
        },
        {
          path:'addsite',
          name:'AddSite',
          component:AddSite
        },
        {
          path:'editsite',
          name:'EditSite',
          component: EditSite
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
