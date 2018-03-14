<template>
<div>
  <page-type-controller :data="page" :type="type"></page-type-controller>
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
    this.getPageDetails();
    next();
  },

  created() {
    this.getPageDetails();
  },

  methods: {
    async getPageDetails() {

      // Get Page Data.
      await this.$store.dispatch("fetchPage", {slug: this.slug, type: this.type});

      // Set page data with current page data.
      this.page = this.getCurrentPage(this.slug);
      document.title = this.page.post_title;
    },
  },
}
</script>
