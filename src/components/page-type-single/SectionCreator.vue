<template>
<div>
  <div v-for="section in page.sections" :key="section.acf_fc_id">
    <section class="section content-section" data-spacing-top="section.section_utilities.spacing_top">
      <div class="section__container">
        <section-intro :intro="section.section_intro"></section-intro>

        <!-- <div v-if="section.acf_fc_layout === 'blog_section'">
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

        <div v-if="section.acf_fc_layout === 'divider_section'">
          <divider-section :section="section"></divider-section>
        </div> -->
      </div>
    </section>
  </div>
</div>
</template>

<script>
export default {
  name: 'SectionCreator',
  props: {
    page: {
      section_intro: {}
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/utils/shared-variables';
@import '../../assets/styles/utils/mixins';
@import '../../assets/styles/utils/placeholders';

.section {
  @include section-spacings(top);
  @include section-spacings(bottom);
  position: relative;

  &__container {
    @extend %site-container;

    &--full {
      max-width: inherit;
    }

    &--full-no-space {
      max-width: inherit;
      padding-left: 0;
      padding-right: 0;
    }
  }
}

</style>
