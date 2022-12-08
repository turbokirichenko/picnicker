<script>
  export let clicked = () => {};
</script>

<button class="bar-button" on:click={clicked}>
  <div class="bar-button__content">
    <slot />
  </div>
</button>

<style lang="scss">
  .bar-button {
    background: none;
    border: none;
    width: 100%;
    height: 100%;
    padding: 0;
    filter: invert(1);
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus {
      outline: none;
    }

    &__content {
      display: block;
      width: 40%;
      height: 40%;
    }
  }
</style>
