
<template>
<header class="section-heading">
  <div class="section-heading__container">
      {{intro}}
    <h1 class="section-heading__title" v-if="intro.maintitle">
      {{intro.maintitle.title}}
    </h1>
    <div class="section-heading__subtitle content-style" v-if="intro.subtitle.title !== ''">
      {{intro.subtitle.title}}
    </div>
  </div>
</header>
</template>

<script>

export default {
  name: 'SectionIntro',
  props: {
    intro: {
      maintitle: {
        title: String,
        title_size: String,
        title_seo: String,
      },
      subtitle: {
        title: String
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/utils/colors';
@import '../../../assets/styles/utils/shared-variables';
@import '../../../assets/styles/utils/mixins';
@import '../../../assets/styles/utils/placeholders';

$section-heading-subititle-color: $base-chalice-color;

.section-heading {
  text-align: center;
  margin-bottom: 55px;

  &__title {
    @include text-size(huge);

    @extend %heading-reset;
    text-transform: uppercase;
    font-weight: bold;
  }

  &__subtitle {
    @include text-size(largest);

    font-weight: 600;
    color: $section-heading-subititle-color;
  }
}

</style>
