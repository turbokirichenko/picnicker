<script>
  import { classes } from "../../shared/utils/classes.js";
  import { createBEM } from "../../shared/utils/create-bem.js";
  import helloEmojiSrc from "../../shared/assets/hello-emoji.svg";
  import ColorsGroup from "./colors-group.svelte";
  import { COLORS } from "./constants";
  export let view = true;
  export let hash = true;
  let color = COLORS[0];
  let darkTheme = false;
  let checked = 0;
  $: console.log(createBEM("contacts", "item", "type", color));
</script>

<article
  class={classes("hcard", createBEM("hcard", "", darkTheme ? "dark" : "light"))}
>
  <header class="header">
    {#each Array(7) as _}
      <div
        class={classes(
          createBEM("header", "block"),
          createBEM("contacts", "item", "type", color)
        )}
      />
    {/each}
  </header>
  <img src={helloEmojiSrc} alt="hello emoji" class="hello-emoji" />
  <p class="hcard__heading">Tap to set your bio</p>
  <div class="contacts">
    {#each Array(3) as _, i}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <section
        on:click={(e) => {
          checked = i;
        }}
        class={classes(
          createBEM("contacts", "item"),
          createBEM("contacts", "item", i != checked && "disabled"),
          createBEM("contacts", "item", "type", color)
        )}
      />
    {/each}
  </div>
  <footer class="footer-bar">
    <ColorsGroup bind:color bind:darkTheme />
  </footer>
</article>

<style lang="scss">
  $colors: (
    tomato: tomato,
    greenwood: #1fbc1a,
    spaceline: #f77eff,
  );

  $bg-colors: (
    dark: #222,
    light: #fff,
  );

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
    box-shadow: 0px 0px 15px #19191920;
    color: tomato;
    padding: 40px 20px;

    @each $name, $color in $bg-colors {
      @include setBgItems($name, $color);
    }

    &__heading {
      font-size: 14px;
      margin: 0;
      text-align: left;
      line-height: 18px;
      padding-right: 40px;
      width: 100%;
      height: 44px;
      overflow: hidden;
      color: #87878780;
      margin-bottom: 24px;
    }
  }

  .header {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    gap: 20px;
    width: 100%;
    height: 10px;
    position: absolute;
    top: 0;
    left: 0;

    &__block {
      width: 20px;
      height: 10px;
      background-color: tomato;

      &_type {
        @each $name, $color in $colors {
          @include setBgItems($name, $color);
        }
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

  .contacts {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;

    &__item {
      width: 100%;
      height: 24px;
      border-radius: 5px;
      background: tomato;

      &_disabled {
        opacity: 0.5;
      }

      &_type {
        @each $name, $color in $colors {
          @include setBgItems($name, $color);
        }
      }
    }
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
