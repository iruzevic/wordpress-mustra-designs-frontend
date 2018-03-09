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
      'getThemeOptions',
      'getMenu',
    ])
  },
  created() {
    this.setInitThemeOptions();
    this.setInitMenus();
  },
  methods: {
    setInitThemeOptions() {
      this.$store.dispatch("fetchThemeOptions");
    },

    async setInitMenus() {
      console.log('app');
       await this.$store.dispatch("fetchMenu");
      // this.$store.dispatch("fetchMenuItems");
    }
  }
}
</script>
