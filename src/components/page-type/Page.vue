<template>
<div>
  <Loading :isLoading="this.isLoading"></Loading>
  {{page.template}}
  <page-type-controller :data="page" :type="type"></page-type-controller>
</div>
</template>

<script>

import { mapGetters } from 'vuex'
import store from '@/store'
import page from '@/store/page';
import * as aTypes from '@/store/actions.type';

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
      'isLoading',
      'getCurrentPage',
    ]),
  },

  async beforeRouteEnter (to, from, next) {
    await this.getPageDetails(to.params.slug, 'page');
    next();
  },

  async beforeRouteUpdate (to, from, next) {
    await this.getPageDetails(to.params.slug, 'page');
    next();
  },

  mounted() {
    this.getPageDetails(this.slug, this.type);
  },

  methods: {
    getPageDetails(slug, type) {
      this.$store.dispatch(aTypes.FETCH_PAGE, {slug: slug, type: type});

      // // Get Page Data.
      // await this.$store.dispatch(aTypes.FETCH_PAGE, {slug: this.slug, type: this.type});

      // // Set page data with current page data.
      this.page = this.getCurrentPage(this.slug);
      // document.title = this.page.post_title;
    },
  },
}
</script>
