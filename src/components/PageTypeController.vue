
<template>
<div>
  <div v-if="data.template === 'section-creator'">
    <section-creator :page="data"></section-creator>
  </div>
  <div v-if="data.template === 'default'">
    <page-default :page="data"></page-default>
  </div>
  <div v-if="type === 'post'">
    <post-single-item :post="data"></post-single-item>
  </div>
</div>
</template>

<script>

export default {
  name: 'PageTypeController',
  props: {
    data: Object,
    type: String
  },
}
</script>
