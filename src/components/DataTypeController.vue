
<template>
<div>
  <div v-if="data.template === 'section-creator'">
    <section-creator :page="data"></section-creator>
  </div>
  <div v-if="data.template === 'default'">
    <page-default :page="data"></page-default>
  </div>
  <div v-if="type === 'post'">
    <post-item :post="data"></post-item>
  </div>
</div>
</template>

<script>

export default {
  name: 'DataTypeController',
  props: {
    data: Object,
    type: String
  },
}
</script>
