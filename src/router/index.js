import Vue from 'vue'
import Router from 'vue-router'
import PagesIndex from '@/pages/PagesIndex';
// import Page from '@/components/page-type/Page'
// import Nested from '@/components/page-type/Nested'
// import Home from '@/components/page-type/Home'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PagesIndex,
    },
    {
      path: '/:slug',
      name: 'Page',
      component: PagesIndex,
    },
    {
      path: '/:type/:slug',
      name: 'Blog',
      component: PagesIndex,
    }
  ]
})
