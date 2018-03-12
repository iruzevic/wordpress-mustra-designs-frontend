<template>
<div>
  <data-type-controller :data="page" :type="type"></data-type-controller>
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

  beforeRouteUpdate (to, from, next) {
    this.slug = to.params.slug;

    console.log('Home');

    this.getPageDetails();
    next();
  },

  methods: {
    async getPageDetails() {

      this.getMenuItems.map((value, index) => {
        if(value.url === '/') {
          this.slug = value.slug;
        }
      });

      await this.$store.dispatch("fetchPage", {slug: this.slug, type: this.type});

      this.page = this.getCurrentPage(this.slug);
      document.title = this.page.post_title;
    },
  },
}
</script>
