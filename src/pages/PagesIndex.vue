
<template>
<div>
  <!-- {{fetchMenuItems}} -->
  <br/>
  <br/>
  <br/>
  <br/>
  Template - {{template}}
  <br/>
  Data - {{data}}
  <component :is="template" :page="data"></component>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
import menu from '@/store/menu';
import page from '@/store/page';
import * as aTypes from '@/store/actions.type';

export default {
  name: 'PagesIndex',
  data() {
    return {
      data: {},
      slug: this.$route.params.slug,
      type: 'page',
      template: '',
    }
  },

  created() {
    this.setSlug();
    this.fetchData().then(() => {
      this.setCurrentPage();
    });
  },

  computed: {
    ...mapGetters([
      'isLoading',
      'getCurrentPage',
      'getMenuItems',
    ]),

    fetchMenuItems() {
      return this.getMenuItems;
    },
  },

  methods: {
    setSlug() {
      if(this.slug === 'undefined') {
        this.slug = '/';
      }
    },
    async fetchData() {
      // console.log(this.slug);
      // if(this.slug = '/'){
      // console.log(this.fetchMenuItems.length)
      // }
        // this.fetchMenuItems.then(() => {
        //   console.log('a')
        // });
      // if(this.fetchMenuItems.length !== 'undefined') {
      //   this.fetchMenuItems.map((value, index) => {
      //     if(value.url === '/') {
      //       this.slug = value.slug;
      //     }
      //   });
      // }
      await store.dispatch(aTypes.FETCH_PAGE, {slug: this.slug, type: 'page'});
      // this.fetchMenuItems.map((value, index) => {
      //   if(value.url === '/') {
      //     this.slug = value.slug;
      //   }
      // });

    },
    setCurrentPage() {
      // console.log('SET CURRENT PAGE');
      this.data = this.getCurrentPage(this.slug);

      let template = '';
      if(this.type === 'page') {
        if(this.data.template === 'section-creator') {
          template = 'section-creator';
        } else {
          template = 'page-default'
        }
      } else if(this.type === 'post') {
        template = 'post-single-item';
      }

      this.template = template;

    },
  }
}
</script>
