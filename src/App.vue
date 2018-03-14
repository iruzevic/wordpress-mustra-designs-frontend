<template>
  <div id="app">
    <navigation :position="navigationPosition" />
    <router-view/>
  </div>
</template>

<script>
import { getMenuItems } from '@/store/getters';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      navigationPosition: 'header',
    };
  },
  computed: {
    ...mapGetters([
      // 'getThemeOptions',
      'getMenu',
    ])
  },
  created() {
    this.setInitMenus();
  },
  methods: {
    async setInitMenus() {
       await this.$store.dispatch("fetchMenu");
    }
  }
}
</script>

<style lang="scss">
  @import './assets/styles/application.scss';
</style>

