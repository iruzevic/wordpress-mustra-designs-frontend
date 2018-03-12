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
    // this.setInitThemeOptions();
    this.setInitMenus();
  },
  methods: {
    // async setInitThemeOptions() {
    //   await this.$store.dispatch("fetchThemeOptions");
    // },

    async setInitMenus() {
       await this.$store.dispatch("fetchMenu");
    }
  }
}
</script>
