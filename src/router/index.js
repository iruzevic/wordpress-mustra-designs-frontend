import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/data-type/Page'
import Nested from '@/components/data-type/Nested'
import Home from '@/components/data-type/Home'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/:slug',
      name: 'Page',
      component: Page,
    },
    {
      path: '/:type/:slug',
      name: 'Blog',
      component: Nested,
      props: true
    }
  ]
})
