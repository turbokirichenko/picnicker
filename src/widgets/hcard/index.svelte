<script>
  import { classes } from "~/shared/utils/classes.js";
  import { createBEM } from "~/shared/utils/create-bem.js";
  import helloEmojiSrc from "~/shared/assets/hello-emoji.svg";
  import { COLORS } from "./constants";
  import ColorsGroup from "./ui/colors-group.svelte";
  import Header from "./ui/header.svelte";
  import Editor from "./ui/editor.svelte";

  const isDark = (theme) => (theme ? "light" : "dark");

  export let view = true;
  export let data = {};

  const defaultData = { dark: false, color: COLORS[0], bio: "", contacts: [] };
  $: data = { ...defaultData, ...data };
</script>

<article class={classes("hcard", createBEM("hcard", "", isDark(data.dark)))}>
  <Header color={data.color} />
  <img src={helloEmojiSrc} alt="hello emoji" class="hello-emoji" />
  <Editor
    allowEdit={!view}
    theme={isDark(data.dark)}
    color={data.color}
    bind:bio={data.bio}
    bind:contacts={data.contacts}
  />
  {#if !view}
    <footer class="footer-bar">
      <ColorsGroup bind:color={data.color} bind:darkTheme={data.dark} />
    </footer>
  {/if}
</article>

<style lang="scss">
  @use "colors";

  @mixin setBgItems($name, $color) {
    &_#{$name} {
      background-color: $color;
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
    box-shadow: 0px 0px 15px #123123a0;
    border-radius: 2px;
    overflow: hidden;

    &::after {
      display: block;
      padding-bottom: 100%;
    }

    @each $name, $color in colors.$bg-colors {
      @include setBgItems($name, $color);
    }

    &__heading {
      font-size: 16px;
      margin: 0;
      text-align: left;
      line-height: 18px;
      padding-right: 40px;
      width: 100%;
      height: 44px;
      overflow: hidden;
      color: #87878780;
      margin-bottom: 24px;
      background: none;
      resize: none;
      border: none;
      &:focus {
        outline: none;
      }
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
    height: 30px;
    width: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
  }
</style>