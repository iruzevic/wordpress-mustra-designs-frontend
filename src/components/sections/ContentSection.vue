<template>
<div class="content-section" :data-items-in-row="section.items_in_one_row">
  <div v-for="content_item in section.content_items" class="content-section__item">
    <div class="content-section__content content-style content-media-style">
      {{content_item.content}}
  </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'ContentSection',
  props: {
    section: Object
  },
}
</script>

<style lang="scss" scoped>
@import '~media-blender';
@import '../../assets/styles/utils/shared-variables';
@import '../../assets/styles/utils/mixins';
@import '../../assets/styles/utils/placeholders';

.content-section {
  $this: &;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 (-$base-content-padding);

  @include media(mobile down) {
    &:nth-child(-n+1) {
      margin-top: 0;
    }
  }

  &[data-items-in-row='1'] {
    #{$this}__item {
      &:nth-child(-n+1) {
        margin-top: 0;
      }
    }
  }

  &[data-items-in-row='2'] {
    #{$this}__item {
      @include media(mobile up) {
        width: 50%;

        &:nth-child(-n+2) {
          margin-top: 0;
        }
      }
    }
  }

  &[data-items-in-row='3'] {
    #{$this}__item {
      @include media(tablet) {
        width: 50%;

        &:nth-child(-n+2) {
          margin-top: 0;
        }
      }
      @include media(desktop up) {
        width: 33.33%;

        &:nth-child(-n+3) {
          margin-top: 0;
        }
      }
    }
  }

  &[data-items-in-row='4'] {
    #{$this}__item {
      @include media(mobile tablet) {
        width: 50%;

        &:nth-child(-n+2) {
          margin-top: 0;
        }
      }
      @include media(desktop up) {
        width: 25%;

        &:nth-child(-n+4) {
          margin-top: 0;
        }
      }
    }
  }

  &__item {
    padding: 0 $base-content-padding;
    width: 100%;
    margin-bottom: 40px;
  }
}

</style>
