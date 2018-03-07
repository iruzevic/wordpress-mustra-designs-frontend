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
  name: 'Nested',
  data() {
    return {
      page: {},
      slug: this.$route.params.slug,
      type: this.$route.params.type,
    }
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
    getPageDetails() {
      if(this.type === 'blog') {
        this.type = 'post';
      }

      getPageService(this.slug, this.type).then((response) => {
        this.page = response.data;
        document.title = this.page.post_title;
      });
    },
  },
}
</script>
