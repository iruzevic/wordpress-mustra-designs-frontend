// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.config.devTools = true;

// Components.
import DataTypeController from './components/DataTypeController.vue';

// Shared.
import Navigation from './components/shared/Navigation.vue';

// Data Type.
import SectionCreator from './components/data-type/SectionCreator.vue';
import PostItem from './components/data-type/PostItem.vue';
import PageDefault from './components/data-type/PageDefault.vue';

// Sections
import BlogSection from './components/sections/BlogSection.vue';
import ContentSection from './components/sections/ContentSection.vue';
import HeroSection from './components/sections/HeroSection.vue';
import ImageTextSection from './components/sections/ImageTextSection.vue';
import InfoBoxesSection from './components/sections/InfoBoxesSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import TimelineSection from './components/sections/TimelineSection.vue';

// Shared
Vue.component('Navigation', Navigation);
Vue.component('DataTypeController', DataTypeController);
Vue.component('SectionCreator', SectionCreator);
Vue.component('PostItem', PostItem);
Vue.component('PageDefault', PageDefault);

Vue.component('BlogSection', BlogSection);
Vue.component('ContentSection', ContentSection);
Vue.component('HeroSection', HeroSection);
Vue.component('ImageTextSection', ImageTextSection);
Vue.component('InfoBoxesSection', InfoBoxesSection);
Vue.component('ProjectsSection', ProjectsSection);
Vue.component('TimelineSection', TimelineSection);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
})
