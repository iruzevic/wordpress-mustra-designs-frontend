<template>
<div>
  <div v-if="page.template === 'section-creator'">
    <section-creator :page="page"></section-creator>
  </div>
  <div v-if="page.template === 'default'">
    <page-default :page="page"></page-default>
  </div>
  <div v-if="type === 'post'">
    <blog-item :post="page"></blog-item>
  </div>
</div>
</template>

<script>

import {getPageService} from '@/services/page';

export default {
  name: 'Page',
  data() {
    return {
      page: {},
      slug: this.$route.params.slug,
      type: 'page',
      options: {}
    }
  },

  beforeRouteUpdate (to, from, next) {
    this.slug = to.params.slug;

    this.getPageDetails();
    next();
  },


  created() {
    this.$store.dispatch('getAllPokemon');
    // this.getPageDetails();
    // this.test()
  },

  // methods: {
  //   getPageDetails() {
  //     console.log(this.options);
  //     if(typeof this.slug === 'undefined') {
  //       this.slug = 'welcome';
  //     }
  //     getPageService(this.slug, this.type).then((response) => {
  //       this.page = response.data;
  //       document.title = this.page.post_title;
  //     });
  //   },
  // },
}
</script>
