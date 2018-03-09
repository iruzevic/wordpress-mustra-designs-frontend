<template>
<div>
  <data-type-controller :data="page" :type="type"></data-type-controller>
</div>
</template>

<script>

import store from '@/store/store';

export default {
  name: 'Home',
  data() {
    return {
      page: {},
      slug: '',
      type: 'page',
    }
  },

  created() {
    this.getPageDetails();
  },

  methods: {
    async getPageDetails() {
      await this.$store.dispatch("fetchThemeOptions").then(() => {
        this.slug = this.$store.state.themeOptions.home_page_url;
      });

      await this.$store.dispatch("fetchPage", {slug: this.slug, type: this.type}).then(() => {
        this.page = this.$store.state.page;
        document.title = this.page.post_title;
      });
    },
  },
}
</script>
