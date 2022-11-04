<script>
  export let screenlock = false;
</script>

<div class="screenshot-layout">
  <slot />
  {#if screenlock}
    <div class="screenshot">
      <div class="screenshot__timeline" />
    </div>
  {/if}
</div>

<style lang="scss">
  .screenshot-layout {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .screenshot {
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    &__timeline {
      position: fixed;
      top: 0;
      width: 100%;
      height: 8px;
      padding: 2px;
      background: red;
    }
  }
</style>
