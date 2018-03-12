<template>
<div>
  <data-type-controller :data="page" :type="type"></data-type-controller>
</div>
</template>

<script>

import { mapGetters } from 'vuex'
import { getCurrentPage } from '@/store/getters'

export default {
  name: 'Page',
  data() {
    return {
      page: {},
      slug: this.$route.params.slug,
      type: 'page',
    }
  },

  computed: {
    ...mapGetters([
      'getCurrentPage',
    ]),
  },

  beforeRouteUpdate (to, from, next) {
    this.slug = to.params.slug;

    console.log('Page');

    this.getPageDetails();
    next();
  },

  methods: {
    async getPageDetails() {

      await this.$store.dispatch("fetchPage", {slug: this.slug, type: this.type});
      this.page = this.getCurrentPage(this.slug);
      document.title = this.page.post_title;
    },
  },
}
</script>
