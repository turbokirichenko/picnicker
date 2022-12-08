<div class="drop-menu">
  <slot name="children" />
  <div class="drop-menu__content">
    <slot name="menu" />
  </div>
</div>

<style lang="scss">
  .drop-menu {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    &__content {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      padding-top: 10px;
    }
  }
</style>
