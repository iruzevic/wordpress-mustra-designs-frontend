<template>
<div>
  <div v-for="section in page.sections" :key="section.acf_fc_layout">

    <div v-if="section.acf_fc_layout === 'blog_section'">
      <blog-section :section="section"></blog-section>
    </div>

    <div v-if="section.acf_fc_layout === 'content_section'">
      <content-section :section="section"></content-section>
    </div>

    <div v-if="section.acf_fc_layout === 'hero_section'">
      <hero-section :section="section"></hero-section>
    </div>

    <div v-if="section.acf_fc_layout === 'image_text_section'">
      <image-text-section :section="section"></image-text-section>
    </div>

    <div v-if="section.acf_fc_layout === 'info_boxes_section'">
      <info-boxes-section :section="section"></info-boxes-section>
    </div>

    <div v-if="section.acf_fc_layout === 'projects_section'">
      <projects-section :section="section"></projects-section>
    </div>

    <div v-if="section.acf_fc_layout === 'timeline_section'">
      <timeline-section :section="section"></timeline-section>
    </div>

  </div>
  
</div>
</template>


<script>
export default {
  name: 'SectionCreator',
  props: {
    page: Object
  },
}
</script>
