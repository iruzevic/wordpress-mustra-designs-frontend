<template>
<div>
  <data-type-controller :data="page" :type="type"></data-type-controller>
</div>
</template>

<script>

import {getPageService} from '@/services/page';
import store from '@/store/store';

export default {
  name: 'Page',
  data() {
    return {
      page: {},
      slug: this.$route.params.slug,
      type: 'page',
      themeOptions: {}
    }
  },

  beforeRouteUpdate (to, from, next) {
    this.slug = to.params.slug;

    this.getPageDetails();
    next();
  },


  created() {
    this.$store.dispatch("fetchThemeOptions").then(() => {
      this.themeOptions = this.$store.state.themeOptions;
    })

    this.getPageDetails();
  },

  methods: {
    getPageDetails() {
      if(typeof this.slug === 'undefined') {
        this.slug = this.themeOptions.home_page_url;
      }

      console.log(this.slug)

      getPageService(this.slug, this.type).then((response) => {
        this.page = response.data;
        document.title = this.page.post_title;
      });
    },
  },
}
</script>
