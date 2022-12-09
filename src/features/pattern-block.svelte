<script>
  import { classes } from "~/shared/utils/classes";
  export let icon = "";
  export let text = "";
  export let theme = "";
</script>

<div class={classes("pattern-block", `pattern-block_${theme}`)}>
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
    pointer-events: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #98329f;
    color: #f9f9f9;
    border-radius: 30px;
    padding: 0;
    border: none;
    &:focus {
      outline: none;
    }

    &_instagram {
      background: #f09433;
      background: -moz-linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
      background: -webkit-linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
      background: linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
      color: white;
    }
    &_vkontakte {
      background: #4c75a3;
      color: white;
    }
    &_telegram {
      background: #2aabee;
      color: white;
    }
    &_tiktok {
      background: -moz-linear-gradient(
        180deg,
        #010101,
        #010101 30%,
        #ee1d52 30%,
        #ee1d52
      );
      background: -webkit-linear-gradient(
        180deg,
        #010101,
        #010101 30%,
        #ee1d52 30%,
        #ee1d52
      );
      background: linear-gradient(
        180deg,
        #010101,
        #010101 30%,
        #ee1d52 30%,
        #ee1d52
      );
      color: white;
    }
    &_github {
      background: black;
      color: white;
    }
    &_email {
      background: #f9f9f9;
      color: #4b0050;
    }
    &_phone {
      background: #f9f9f9;
      color: #4b0050;
    }
    &__text {
      height: auto;
      width: 80%;
    }
  }

  .block-icon {
    display: block;
    padding: 10px;
    width: 48px;
    margin: auto;
  }

  .some-text {
    text-align: center;
    font-size: 24px;
  }
</style>
