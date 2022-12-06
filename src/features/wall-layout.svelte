<div class="internal-block">
  <div class="internal-block__content">
    <slot />
  </div>
</div>

<style lang="scss">
  .internal-block {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &__content {
      width: 100%;
      height: 100%;
      max-width: 900px;
      margin: auto;
    }
  }
</style>
