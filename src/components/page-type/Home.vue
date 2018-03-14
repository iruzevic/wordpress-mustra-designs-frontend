<template>
<div>
  <page-type-controller :data="page" :type="type"></page-type-controller>
</div>
</template>

<script>

import { mapGetters } from 'vuex'
import { getMenuItems, getCurrentPage } from '@/store/getters'

export default {
  name: 'Home',
  data() {
    return {
      page: {},
      slug: '',
      type: 'page',
    }
  },

  computed: {
    ...mapGetters([
      'getMenuItems',
      'getCurrentPage',
    ]),

    storeMenuItems: function() {
      return this.getMenuItems;
    },
  },

  watch: {
    storeMenuItems() {
      this.getPageDetails();
    },
  },

  beforeRouteUpdate (to, from, next) {
    this.slug = to.params.slug;
    this.getPageDetails();
    next();
  },

  methods: {
    async getPageDetails() {

      // Check type of page by checking slug in menu Items.
      this.getMenuItems.map((value, index) => {
        if(value.url === '/') {
          this.slug = value.slug;
        }
      });

      // Get Page Data.
      await this.$store.dispatch("fetchPage", {slug: this.slug, type: this.type});

      // Set page data with current page data.
      this.page = this.getCurrentPage(this.slug);
      document.title = this.page.post_title;
    },
  },
}
</script>
