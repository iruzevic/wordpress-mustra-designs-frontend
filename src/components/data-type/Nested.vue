<template>
<div>
  <data-type-controller :data="page" :type="type"></data-type-controller>
</div>
</template>

<script>

import { mapGetters } from 'vuex'
import { getMenuItems, getCurrentPage } from '@/store/getters'

export default {
  name: 'Nested',
  data() {
    return {
      page: {},
      slug: this.$route.params.slug,
      type: '',
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

    console.log('Nested');

    this.getPageDetails();
    next();
  },

  methods: {
    async getPageDetails() {

      this.getMenuItems.map((value, index) => {
        if(value.slug === this.slug) {
          this.type = value.type;
        }
      });

      await this.$store.dispatch("fetchPage", {slug: this.slug, type: this.type});

      this.page = this.getCurrentPage(this.slug);
      document.title = this.page.post_title;
    },
  },
}
</script>
