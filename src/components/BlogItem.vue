
<template>
<div>
  Blog Item
  {{post}}
</div>
</template>

<script>

export default {
  name: 'BlogItem',
  props: {
    post: Object
  },
}
</script>
