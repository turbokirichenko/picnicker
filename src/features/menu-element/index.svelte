<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="bar" on:click={(e) => e.stopPropagation()}>
  <div class="bar__content">
    <slot />
  </div>
</div>

<style lang="scss">
  .bar {
    display: block;
    width: 100%;
    height: 100%;
    background: #f9f9f980;
    box-shadow: 0px 0px 10px #12312340;
    border-radius: 3px;
    padding: 12px;

    &__content {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
