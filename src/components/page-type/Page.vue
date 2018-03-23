<template>
<div>
  <Loading :isLoading="this.isLoading"></Loading>
  {{page}}
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

    storeMenu: function() {
      return this.getCurrentPage;
    }
  },

  async beforeRouteEnter (to, from, next) {
    console.log(to, from, next, 'beforeRouteEnter');
    await store.dispatch(aTypes.FETCH_PAGE, {slug: to.params.slug, type: 'page'});
    next();
  },

  async beforeRouteUpdate (to, from, next) {
    // this.slug = to.params.slug;
    console.log(to, from, next, 'beforeRouteUpdate');
    await store.dispatch(aTypes.FETCH_PAGE, {slug: to.params.slug, type: 'page'});
    next();
  },

  // mounted() {
    
  // },

  mounted() {
    // storeMenu() {
      this.page = this.getCurrentPage(this.slug);
    // }
  },

  watch: {
    storeMenu() {
      this.page = this.getCurrentPage(this.slug);
    }
  },

  // mounted() {
  //   // this.getPageDetails(this.slug, this.type);
  //   store.dispatch(aTypes.FETCH_PAGE, {slug: to.params.slug, type: 'page'});
  // },

  // methods: {
  //   getPageDetails(slug, type) {
      

  //     // // Get Page Data.
  //     // await this.$store.dispatch(aTypes.FETCH_PAGE, {slug: this.slug, type: this.type});

  //     // // Set page data with current page data.
  //     this.page = this.getCurrentPage(this.slug);
  //     // document.title = this.page.post_title;
  //   },
  // },
}
</script>
