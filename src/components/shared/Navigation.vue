<template>
<div>
  <ul>
    <li v-for="value in menu.items" :key="value.position">
      <a v-bind:href="value.url" v-if="value.type === 'custom'" target="_blank">{{value.title}}</a>
      <router-link v-else :to="{path: value.url, parms: {url: value.slug}}">{{value.title}}</router-link>
    </li>
  </ul>
</div>

</template>

<script>

import {getMenuService} from '@/services/menu';


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

  created() {
    this.getMenuDetails();
  },

  methods: {
    getMenuDetails() {
      getMenuService().then((response) => {
        response.data.map((value, index) => {
          if(value['position'] === this.position) {
            this.menu = value;
          }
        });
      });
    },
  },
}
</script>
