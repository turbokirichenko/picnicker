<script>
  import QrImgSrc from "~/shared/assets/qr-click.svg";
  import EthLogoSrc from "~/shared/assets/eth-logo.svg";
  import Bar from "~/features/menu-element/index.svelte";
  import { classes } from "~/shared/utils/classes";

  export let openQR = false;

  const onClickQRButton = () => {
    openQR = !openQR;
  };
</script>

<Bar>
  <div class="menu-button">
    <button class="menu-button__qr-effect button" on:click={onClickQRButton}>
      <img
        class={classes(
          "qr-image-block",
          `qr-image-block_${openQR ? "open" : "closed"}`
        )}
        src={QrImgSrc}
        alt="qr"
      />
    </button>
    <div class="menu-button__border" />
    <button class="menu-button__save-effect button">
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
</Bar>

<style lang="scss">
  .menu-button {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 12px;

    &__qr-effect {
      flex: 1 1 0px;
      padding: 0;
    }

    &__save-effect {
      flex: 4 1 0px;
      padding: 0;
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
    transition: filter 0.3s;
    &_open {
      filter: invert(1);
    }
  }

  .save-block {
    width: 100%;
    max-height: 100%;
    padding: 0;
    margin: 0;
    padding: 3px 12px;
    border-radius: 5px;
    background-color: #f9f9f9;
    display: flex;
    position: relative;
    &__title {
      padding: 0;
      color: #222;
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
