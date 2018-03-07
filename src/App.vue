<template>
  <div id="app">
    <navigation :position="navigationPosition" />
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      navigationPosition: 'header',
    };
  },
}
</script>
