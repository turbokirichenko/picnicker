<script>
  import { classes } from "~/shared/utils/classes.js";
  import { createBEM } from "~/shared/utils/create-bem.js";
  import { COLORS } from "../constants";
  export let darkTheme;
  export let color;

  const handleTheme = (checked) => () => {
    if (checked) darkTheme = !darkTheme;
  };
  const setChecked = (one, two) => (one === two ? "checked" : "common");
  const isDark = (theme) => (theme ? "dark" : "light");
</script>

<div class="colors-group">
  {#each COLORS as theme}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <label
      class={classes(
        "theme-button",
        createBEM("theme-button", "", isDark(!darkTheme))
      )}
      on:click={handleTheme(theme === color)}
    >
      <div
        class={classes(
          createBEM("theme-button", "color"),
          createBEM("theme-button", "color", setChecked(theme, color)),
          createBEM("theme-button", "color", "type", theme)
        )}
      />
      <input
        class="theme-button__input"
        type="radio"
        value={theme}
        bind:group={color}
      />
    </label>
  {/each}
</div>

<style lang="scss">
  @use "../colors";

  @mixin setColorTheme($name, $color) {
    &_#{$name} {
      background-color: $color;
    }
  }

  @mixin setLabelTheme($theme, $color) {
    &_#{$theme} {
      background-color: $color;
    }
  }

  .colors-group {
    min-width: 80px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 5px;
  }

  .theme-button {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: relative;
    top: 0;
    left: 0;
    background-color: #222;
    @each $name, $color in colors.$bg-colors {
      @include setLabelTheme($name, $color);
    }

    &__color {
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation-fill-mode: forwards;
      animation-duration: 0.3s;
      //background-color: tomato;

      &_common {
        animation-name: change-color-reverse;
      }

      &_checked {
        animation-name: change-color;
      }

      &_type {
        @each $name, $color in colors.$colors {
          @include setColorTheme($name, $color);
        }
      }
    }

    &__input {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
    }
  }

  @keyframes change-color {
    0% {
      width: 105%;
      height: 105%;
    }
    100% {
      width: 60%;
      height: 60%;
    }
  }
  @keyframes change-color-reverse {
    0% {
      width: 60%;
      height: 60%;
    }
    100% {
      width: 105%;
      height: 105%;
    }
  }
</style>
