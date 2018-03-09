<template>
<div>
  <data-type-controller :data="page" :type="type"></data-type-controller>
</div>
</template>

<script>

import { getMenuItems } from '@/store/getters'
import { mapGetters } from 'vuex'
import FETCH_STATUS from '@/enums/fetchStatus';
// import * as types from './mutation-types';


export default {
  name: 'Nested',
  data() {
    return {
      page: {},
      slug: this.$route.params.slug,
      type: this.$route.params.type,
    }
  },
  computed: {
    ...mapGetters([
      'getThemeOptions',
      'getMenuItems',
      'getMenu',
      'menuFetchStatus',
    ])
  },

  beforeRouteUpdate (to, from, next) {
    this.slug = to.params.slug;
    this.type = to.params.type;

    this.getPageDetails();
    next();
  },

  created() {
    this.getPageDetails();
  },

  methods: {
    async getPageDetails() {

      // await this.$store.dispatch("fetchMenu");

      console.log(this.$store.state, 'nested');

      // this.getMenuItems.map((value, index) => {
      //   if(value.slug === this.slug) {
      //     this.type = value.type;
      //   }
      // });

      // await this.$store.dispatch("fetchPage", {slug: this.slug, type: this.type}).then(() => {
      //   this.page = this.$store.state.page;
      //   document.title = this.page.post_title;
      // });
    },
  },
}
</script>
