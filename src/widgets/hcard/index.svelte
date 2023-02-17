<script>
  import { classes } from "~/shared/utils/classes.js";
  import { createBEM } from "~/shared/utils/create-bem.js";
  import helloEmojiSrc from "~/shared/assets/hello-emoji.svg";
  import { COLORS, ICONS } from "./constants";
  import Bar from "~/features/menu-element/index.svelte";
  import ColorsGroup from "./ui/colors-group.svelte";
  import ContactGroup from "./ui/contact-group.svelte";
  import Header from "./ui/header.svelte";
  import Editor from "./ui/editor.svelte";

  const isDark = (theme) => (theme ? "light" : "dark");
  export let view = true;
  export let data = {};

  const defaultData = {
    dark: true,
    color: COLORS[0],
    bio: "",
    contacts: [],
    pattern: 0,
  };
  $: data = { ...defaultData, ...data };
  $: console.log(data);

  const onClickIcon = () =>
    !view && (data.pattern = (data.pattern + 1) % ICONS.length);
</script>

<Bar>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <article
    class={classes("hcard", createBEM("hcard", "", isDark(data.dark)))}
    on:click={onClickIcon}
  >
    <img class="bg-icon" src={ICONS[data.pattern].icon} alt="bg active icon" />
    <input
      class="active-input"
      disabled={view}
      placeholder={ICONS[data.pattern].placeholder}
      bind:value={data.bio}
      on:click={(e) => e.stopPropagation()}
    />
    {#if !view}
      <span class="footer-text"
        >tap to <b class="footer-text__bold">change</b> name</span
      >
    {/if}
  </article>
</Bar>

<style lang="scss">
  @use "colors";

  @mixin setBgItems($name, $color) {
    &_#{$name} {
      background-color: $color;
      &::before {
        background: linear-gradient(145deg, #00000000, $color, #00000000);
      }
    }
  }

  .hcard {
    display: block;
    min-width: 240px;
    min-height: 240px;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
    background-size: 8px 8px;
    box-shadow: 0px 0px 15px #00000080;

    &::after {
      display: block;
      padding-bottom: 100%;
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    @each $name, $color in colors.$bg-colors {
      @include setBgItems($name, $color);
    }
  }

  .active-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    top: calc(50% - 20px);
    text-align: center;
    color: #f9f9f9;
    background: none;
    border: none;
    font-size: 28px;
    &::placeholder {
      color: #f9f9f9b0;
    }
    &:focus {
      border: none;
      outline: none;
    }
  }

  .bg-icon {
    position: absolute;
    width: 120px;
    height: 120px;
    top: calc(50% - 60px);
    left: calc(50% - 60px);
    filter: invert(0.5);
    opacity: 0.2;
    pointer-events: none;
  }

  .footer-text {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 32px;
    font-size: 16px;
    font-weight: 100;
    text-align: center;
    color: #f9f9f9b0;
    &__bold {
      font-weight: 300;
      color: #f9f9f9;
    }
  }

  .hello-emoji {
    display: block;
    position: absolute;
    right: 20px;
    top: 38px;
    width: 24px;
    height: 24px;
  }

  .footer-bar {
    position: absolute;
    height: 24px;
    width: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
  }
</style>
