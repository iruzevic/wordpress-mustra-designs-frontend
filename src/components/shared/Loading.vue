<template>
<div v-if="isLoading">
  Loading...
</div>
</template>

<script>

export default {
  name: 'Loading',
  props: {
    isLoading: true
  },
}
</script>
