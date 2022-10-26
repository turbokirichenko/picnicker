<script>
  import { classes } from "~/shared/utils/classes.js";
  import { createBEM } from "~/shared/utils/create-bem.js";
  import helloEmojiSrc from "~/shared/assets/hello-emoji.svg";
  import { decodeBase64, encodeBase64 } from "~/shared/utils/base64.js";
  import { COLORS } from "./constants";
  import ColorsGroup from "./ui/colors-group.svelte";
  import Header from "./ui/header.svelte";
  import Editor from "./ui/editor.svelte";
  import Viewer from "./ui/viewer.svelte";

  const isDark = (theme) => (theme ? "light" : "dark");

  const createHMC = (color, isDark, bio, contacts) => {
    if (!color || !bio) {
      throw new Error("bio is required place");
    }
    const contactMap = contacts.filter((co) => co.length).join("|");
    //hash format +colorname[bio|...contacts] hash: prefix.datahash
    const gateway = `${isDark ? "-" : "+"}${color}[${bio}|${contactMap}]`;
    return encodeBase64(gateway);
  };

  const decodeHMC = (hash) => {
    if (!hash) throw new Error("hash is empty!");

    const decodeText = decodeBase64(hash);
    const matcher = [...decodeText.matchAll(/^(\+|\-)(\w+)\[(.*?)\]/g)][0];

    if (!matcher) throw new Error("not valid hash standart!");

    const theme = matcher[1] === "-";
    const colorName = matcher[2];
    const infoArray = matcher[3].split("|");
    return [theme, colorName, ...infoArray];
  };

  export let view = true;
  export let hash = "";
  export let createHash = false;
  export let mode = "view";
  export let data = { dark: false, color: "", bio: "", contacts: [] };

  let color = COLORS[0];
  let darkTheme = false;

  let contacts = ["", "", ""];
  let bio = "";
  try {
    [darkTheme, color, bio, ...contacts] = decodeHMC(hash);
  } catch (err) {
    console.log(err.message);
  }

  //create hash if
  $: createHash && createHMC(color, isDark, bio, contacts);
</script>

<article class={classes("hcard", createBEM("hcard", "", isDark(darkTheme)))}>
  <Header {color} />
  <img src={helloEmojiSrc} alt="hello emoji" class="hello-emoji" />
  {#if view}
    <Viewer {contacts} {color} {bio} theme={isDark(darkTheme)} />
  {:else}
    <Editor bind:contacts bind:bio {color} theme={isDark(darkTheme)} />
    <footer class="footer-bar">
      <ColorsGroup bind:color bind:darkTheme />
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
    width: 280px;
    height: 280px;
    position: relative;
    top: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0px 0px 15px #19191930;
    border-radius: 2px;
    overflow: hidden;

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
