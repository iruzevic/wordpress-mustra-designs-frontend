<template>
<div>
  <Loading :isLoading="this.isLoading"></Loading>
  <ul>
    <li v-for="value in menu.items" :key="value.position">
      <a v-bind:href="value.url" v-if="value.type === 'custom'" target="_blank">{{value.title}}</a>
      <router-link v-else :to="value.url">{{value.title}}</router-link>
    </li>
  </ul>
</div>
</template>

<script>

import { mapGetters } from 'vuex'
import menu from '@/store/menu';
import * as aTypes from '@/store/actions.type';

export default {
  name: 'Navigation',
  props: {
    position: String
  },
  data() {
    return {
      menu: {},
    }
  },
  computed: {
    ...mapGetters([
      'isLoading',
      'menus',
    ]),

    storeMenu: function() {
      return this.menus;
    }
  },

  watch: {
    storeMenu() {
      this.menus.map((value, index) => {
        if(value['position'] === this.position) {
          this.menu = value;
        }
      });
    }
  },
  mounted () {
    this.fetchMenu()
  },

  methods: {
    fetchMenu () {
      this.$store.dispatch(aTypes.FETCH_MENU)
    },
  }
}
</script>
