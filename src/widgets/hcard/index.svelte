<script>
  import { fade } from "svelte/transition";
  import { classes } from "~/shared/utils/classes.js";
  import { createBEM } from "~/shared/utils/create-bem.js";
  import { COLORS, ICONS } from "./constants";
  import Bar from "~/features/menu-element/index.svelte";

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

  let input;
  const onClickIcon = () =>
    !view && !data.bio && (data.pattern = (data.pattern + 1) % ICONS.length);
  const selectInput = (e) => {
    input.focus();
    input.select();
    return true;
  };
  const onClickLink = (e) => {
    if (!view) return true;
    const src = ICONS[data.pattern]?.src;
    const url = src ? src.replace(/\{@your\}/i, data.bio) : "";
    if (url) location.href = url;
    return true;
  };
</script>

<Bar>
  <!-- svelte-ignore a11y-click-events-have-key-events style="background-color: {stringToColor(data.bio)}" -->
  <article
    class={classes("hcard", createBEM("hcard", "", isDark(data.dark)))}
    on:click={(e) => onClickLink(e) && onClickIcon()}
  >
    {#key data.pattern}
      <img
        in:fade={{ duration: 500 }}
        class="bg-icon"
        src={ICONS[data.pattern].icon}
        alt="bg active icon"
      />
      <input
        in:fade={{ duration: 500 }}
        class="active-input"
        disabled={view}
        placeholder={ICONS[data.pattern].placeholder}
        bind:this={input}
        bind:value={data.bio}
        on:click={(e) => selectInput() && e.stopPropagation()}
      />
    {/key}
    <span class="footer-text">
      {#if !view}
        tap to <b class="footer-text__bold">change</b> name
      {:else}
        tap to <b class="footer-text__bold">open</b> account
      {/if}
    </span>
  </article>
</Bar>

<style lang="scss">
  @use "colors";

  @mixin setBgItems($name, $color) {
    &_#{$name} {
      //background-color: $color;
      &::before {
        background: radial-gradient(#{$color}a0, $color, $color);
      }
    }
  }

  .hcard {
    display: block;
    min-width: 240px;
    min-height: 120px;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    background-color: #262626;
    border-radius: 3px;
    overflow: hidden;
    background-size: 8px 8px;
    //box-shadow: 0px 0px 15px #00000080;
    transition: background-color 0.2s;

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
    font-size: 26px;
    overflow: hidden;
    padding: 0 15px;
    text-overflow: ellipsis;
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
    width: 100px;
    height: 100px;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
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
