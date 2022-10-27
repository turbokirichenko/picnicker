<script>
  import QrImgSrc from "~/shared/assets/qr-click.svg";
  import EthLogoSrc from "~/shared/assets/eth-logo.svg";
</script>

<div class="bar">
  <button class="bar__qr-effect button">
    <img class="qr-image-block" src={QrImgSrc} alt="qr" />
  </button>
  <div class="bar__border" />
  <button class="bar__save-effect button">
    <div class="save-block">
      <span class="save-block__title">Save card from Ethereum!</span>
      <img
        class="save-block__image"
        src={EthLogoSrc}
        alt="blockchain network"
      />
    </div>
  </button>
</div>

<style lang="scss">
  .bar {
    width: 100%;
    height: 100%;
    background: #f9f9f980;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 10px #12312340;
    border-radius: 3px;

    &__qr-effect {
      flex: 1 1 0px;
    }

    &__save-effect {
      flex: 4 1 0px;
    }

    &__border {
      width: 3px;
      height: 90%;
      border-radius: 3px;
      background: #222;
    }
  }

  .qr-image-block {
    display: block;
    width: 100%;
  }

  .save-block {
    width: 100%;
    max-height: 100%;
    padding: 0;
    margin: 0;
    padding: 5px 12px;
    border-radius: 5px;
    background-color: #f9f9f9;
    display: flex;
    position: relative;
    &__title {
      padding: 0;
    }
    &__image {
      padding: 0;
      width: 24px;
    }
    &::before {
      position: absolute;
      top: -5px;
      right: -8px;
      content: "beta";
      display: block;
      width: 32px;
      height: 16px;
      font-size: 12px;
      line-height: 16px;
      padding: 1px;
      background: #d93d04;
      border-radius: 5px;
      color: #f9f9f9;
    }
  }

  .button {
    background: none;
    border: none;
    height: 100%;
    &:focus {
      outline: none;
    }
    &:disabled {
      opacity: 0.5;
    }
  }
</style>
