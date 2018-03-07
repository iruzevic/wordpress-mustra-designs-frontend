import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/Page'
import Nested from '@/components/Nested'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Page,
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
