<template>
<div>
  <ul>
    <li v-for="value in menu.items" :key="value.position">
      <router-link :to="value.url">{{value.title}}</router-link>
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
