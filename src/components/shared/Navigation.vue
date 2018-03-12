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

import { mapGetters } from 'vuex'
import { getMenu } from '@/store/getters'

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
      'getMenu',
    ]),

    storeMenu: function() {
      return this.getMenu;
    }
  },

  watch: {
    storeMenu() {
      this.getMenuDetails()
    }
  },

  methods: {
    getMenuDetails() {
      this.storeMenu.map((value, index) => {
        if(value['position'] === this.position) {
          this.menu = value;
        }
      });
    },
  },
}
</script>
