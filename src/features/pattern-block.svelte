<script>
  export let icon = "";
  export let text = "";
</script>

<div class="pattern-block">
  {#if icon}
    <div class="pattern-block__icon">
      <img class="block-icon" src={icon} alt="pattern block icon" />
    </div>
  {/if}
  <div class="pattern-block__text">
    <div class="some-text">
      <span class="some-text__content">{text}</span>
    </div>
  </div>
</div>

<style lang="scss">
  .pattern-block {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f9f9f9;
    border-radius: 30px;
    &__icon {
      width: 20%;
      height: 100%;
    }
    &__text {
      flex-grow: 1;
      height: 100%;
    }
  }

  .block-icon {
    display: block;
    height: 100%;
    padding: 10px;
  }

  .some-text {
    text-align: center;
    font-size: 24px;
    color: #f9f9f9;
  }
</style>
