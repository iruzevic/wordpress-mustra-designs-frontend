<template>
  <div id="app">
    <navigation :position="navigationPosition" />
    <router-view/>
  </div>
</template>

<script>
import themeOptions from './mixins/theme-options';
export default {
  name: 'App',
  data() {
    return {
      navigationPosition: 'header',
    };
  },
  created() {
    
    this.test()
  },
  methods: {
   async test() {
      console.log(themeOptions.options);  
    }
  }
}
</script>
