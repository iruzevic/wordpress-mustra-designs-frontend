<template>
  <div id="app">
    <navigation :position="headerNavPosition" />
    <br/>
    <router-view :key="$route.path"/>
    <br/>
    <navigation :position="footerNavPosition" />
  </div>
</template>

<script>
import menu from '@/store/menu';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      headerNavPosition: 'header',
      footerNavPosition: 'footer',
    };
  },
}
</script>

<style lang="scss">
  @import './assets/styles/application.scss';
</style>

