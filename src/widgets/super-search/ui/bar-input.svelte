<script>
  import { classes } from "~/shared/utils/classes";

  export let searched = "";
  export let placeholder = "nickname";
  export let theme = "";
</script>

<input
  class={classes("bar-input", `bar-input_${theme}`)}
  bind:value={searched}
  {placeholder}
/>

<style lang="scss">
  .bar-input {
    background: none;
    border: none;
    width: 100%;
    height: 100%;
    padding: 0;
    font-size: 21px;
    color: #f9f9f9;
    border-radius: 1000px;
    padding: 0 15px;

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

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-size: 18px;
      color: #f9f9f980;
    }
  }
</style>
