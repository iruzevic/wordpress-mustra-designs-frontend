// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
// import './assets/styles/application.scss';

Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.config.devTools = true;

// Components.
import PageTypeController from './components/PageTypeController.vue';

// Shared.
import Navigation from './components/shared/Navigation.vue';
import Loading from './components/shared/Loading.vue';

// Page Type.
import SectionCreator from './components/page-type-single/SectionCreator.vue';
import PostSingleItem from './components/page-type-single/PostSingleItem.vue';
import PageDefault from './components/page-type-single/PageDefault.vue';

// Sections
import BlogSection from './components/sections/BlogSection.vue';
import ContentSection from './components/sections/ContentSection.vue';
import HeroSection from './components/sections/HeroSection.vue';
import ImageTextSection from './components/sections/ImageTextSection.vue';
import InfoBoxesSection from './components/sections/InfoBoxesSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import TimelineSection from './components/sections/TimelineSection.vue';
import DividerSection from './components/sections/DividerSection.vue';

// Section Parts
import SectionIntro from './components/sections/parts/SectionIntro.vue';

// Shared
Vue.component('Navigation', Navigation);
Vue.component('Loading', Loading);
Vue.component('PageTypeController', PageTypeController);
Vue.component('SectionCreator', SectionCreator);
Vue.component('PostSingleItem', PostSingleItem);
Vue.component('PageDefault', PageDefault);

Vue.component('BlogSection', BlogSection);
Vue.component('ContentSection', ContentSection);
Vue.component('HeroSection', HeroSection);
Vue.component('ImageTextSection', ImageTextSection);
Vue.component('InfoBoxesSection', InfoBoxesSection);
Vue.component('ProjectsSection', ProjectsSection);
Vue.component('TimelineSection', TimelineSection);
Vue.component('DividerSection', DividerSection);

Vue.component('SectionIntro', SectionIntro);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
})
