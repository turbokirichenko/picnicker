<div class="phone-simulation">
  <div class="phone-simulation__content">
    <slot />
  </div>
</div>

<style lang="scss">
  .phone-simulation {
    width: 100%;
    height: 100%;
    &__content {
      width: 100%;
      height: 100%;
      position: relative;
      top: 0;
      left: 0;
    }
  }

  @media (min-width: 900px) {
    .phone-simulation {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 480px;
      width: 90%;
      height: 90%;

      &__content {
        border-radius: 30px;
        width: 85%;
        height: 90%;
        position: relative;
        top: 0;
        left: 0;
        border: 10px solid #f9f9f980;
        overflow: hidden;
      }
    }
  }
</style>
