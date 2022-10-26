<script>
  import { classes } from "~/shared/utils/classes.js";
  import { createBEM } from "~/shared/utils/create-bem.js";
  export let color;
</script>

<header class="header">
  {#each Array(7) as _}
    <div
      class={classes(
        createBEM("header", "block"),
        createBEM("header", "block", "type", color)
      )}
    />
  {/each}
</header>

<style lang="scss">
  @use "../colors";

  @mixin setBgItems($name, $color) {
    &_#{$name} {
      background-color: $color;
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

      &_type {
        @each $name, $color in colors.$colors {
          @include setBgItems($name, $color);
        }
      }
    }
  }
</style>
