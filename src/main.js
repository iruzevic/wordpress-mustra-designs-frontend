// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import themeOptions from './mixins/theme-options';

Vue.config.productionTip = false

import Navigation from './components/shared/Navigation.vue';
import SectionCreator from './components/sections/SectionCreator.vue';
import BlogItem from './components/BlogItem.vue';
import PageDefault from './components/PageDefault.vue';

import BlogSection from './components/sections/section/BlogSection.vue';
import ContentSection from './components/sections/section/ContentSection.vue';
import HeroSection from './components/sections/section/HeroSection.vue';
import ImageTextSection from './components/sections/section/ImageTextSection.vue';
import InfoBoxesSection from './components/sections/section/InfoBoxesSection.vue';
import ProjectsSection from './components/sections/section/ProjectsSection.vue';
import TimelineSection from './components/sections/section/TimelineSection.vue';

// Shared
Vue.component('Navigation', Navigation);
Vue.component('SectionCreator', SectionCreator);
Vue.component('BlogItem', BlogItem);
Vue.component('PageDefault', PageDefault);

Vue.component('BlogSection', BlogSection);
Vue.component('ContentSection', ContentSection);
Vue.component('HeroSection', HeroSection);
Vue.component('ImageTextSection', ImageTextSection);
Vue.component('InfoBoxesSection', InfoBoxesSection);
Vue.component('ProjectsSection', ProjectsSection);
Vue.component('TimelineSection', TimelineSection);

themeOptions.fetchThemeOptions();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  themeOptions,
  components: { App },
  template: '<App/>'
})
