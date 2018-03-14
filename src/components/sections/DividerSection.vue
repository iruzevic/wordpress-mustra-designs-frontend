
<template>
<div class="divider-section"></div>
</template>

<script>

export default {
  name: 'DividerSection',
  props: {
    section: Object
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/utils/colors';

$divider-section-line-color: $base-mercury-color;

.divider-section {
  width: 100%;
  height: 1px;
  background-color: $divider-section-line-color;
  display: block;
}

</style>
