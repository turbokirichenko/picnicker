<div class="items">
  <div class="items__item">
    <div class="way-block">
      <h1 class="way-block__title">photo</h1>
    </div>
  </div>
  <div class="items__item">
    <div class="way-block">
      <h1 class="way-block__title">gallery</h1>
    </div>
  </div>
  <div class="items__item">
    <div class="way-block">
      <h1 class="way-block__title">from contacts</h1>
    </div>
  </div>
  <div class="items__item">
    <div class="way-block">
      <h1 class="way-block__title">voice</h1>
    </div>
  </div>
</div>

<style lang="scss">
  .items {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;

    &__item {
      flex: 1 1 0px;
      max-width: 100%;
      min-width: 280px;
      height: 80px;
    }
  }

  .way-block {
    width: 100%;
    height: 100%;
    background-color: crimson;
    border-radius: 20px;

    &__title {
      font-size: 24px;
      color: #f9f9f9;
      text-align: center;
      margin: 0;
    }
  }
</style>
