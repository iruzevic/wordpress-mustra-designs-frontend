<template>
<div>
  <ul>
    <li v-for="value in menu.items" :key="value.position">
      <a v-bind:href="value.url" v-if="value.type === 'custom'" target="_blank">{{value.title}}</a>
      <router-link v-else :to="value.url">{{value.title}}</router-link>
    </li>
  </ul>
</div>

</template>

<script>

import {getMenuService} from '@/services/menu';
import FETCH_STATUS from '@/enums/fetchStatus';
import { mapGetters } from 'vuex'
import { getMenuItems } from '@/store/getters'

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
      'getThemeOptions',
      'getMenuItems',
      'getMenu',
      'menuFetchStatus',
    ])
  },

  created() {
    this.$store.dispatch("fetchMenu");
    this.getMenuDetails();
  },

  methods: {
     getMenuDetails() {
       console.log(this.$store.state, this.getMenu, 'nav');
       this.$store.state.menu.map((value, index) => {
        if(value['position'] === this.position) {
          this.menu = value;
        }
      });
    },
  },
}
</script>
