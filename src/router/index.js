import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/page-type/Page'
import Nested from '@/components/page-type/Nested'
import Home from '@/components/page-type/Home'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home,
    // },
    {
      path: '/:slug',
      name: 'Page',
      component: Page,
    },
    // {
    //   path: '/:type/:slug',
    //   name: 'Blog',
    //   component: Nested,
    //   props: true
    // }
  ]
})
