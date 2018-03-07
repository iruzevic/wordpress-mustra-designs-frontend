<template>
<div>
  <div v-if="page.template === 'section-creator'">
    section-creator
    <section-creator :page="page"></section-creator>
  </div>
  <div v-else>
    default
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
      type: this.$route.params.type,
    }
  },

  beforeRouteUpdate (to, from, next) {
    this.slug = to.params.slug
    next();
    this.getPageDetails();
  },

  created() {
    this.getPageDetails();
  },

  methods: {
    getPageDetails() {
      if(typeof this.type === 'undefined') {
        this.type = 'page';
      }

      getPageService(this.slug, this.type).then((response) => {
        this.page = response.data;
      });
    },
  },
}
</script>
