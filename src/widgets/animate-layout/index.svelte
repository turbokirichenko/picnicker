<script>
  import { classes } from "../../shared/utils/classes.js";
  import { createBEM } from "../../shared/utils/create-bem.js";
  import { sunLayersArr } from "./sun-layers";
  import { planetLayersArr } from "./planet-layers";
  import { duneLayersArr } from "./dune-layers";
  import { cityLayersArr } from "./city-layers";

  const subArr = [sunLayersArr, planetLayersArr, duneLayersArr, cityLayersArr];

  export let layer = 0;
  export let view = false;
  let onload = false;
  let set = 0;

  const onDBClick = () => {
    if (view || onload) return;
    onload = true;
    set = 1;

    setTimeout(() => {
      set = 0;
      onload = false;
      layer = (layer + 1) % subArr.length;
    }, 1000);
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="parallax-layout" on:click={onDBClick}>
  <div
    class={classes(
      createBEM("parallax-layout", "bg"),
      createBEM("parallax-layout", "bg", String(layer % 4))
    )}
  />
  <div class="parallax-layout__layers">
    {#each subArr[layer] as _, i}
      <img
        class={classes(
          "item",
          createBEM("item", "", String(5 - i), set ? "reverse" : "")
        )}
        src={subArr[layer][4 - i]}
        alt="parallax-layer"
      />
    {/each}
  </div>
  <slot />
</div>

<style lang="scss">
  $item-translates: (
    1: 100%,
    2: 110%,
    3: 120%,
    4: 130%,
    5: 140%,
  );

  .parallax-layout {
    width: 100%;
    height: 100%;
    background: none;
    position: relative;
    overflow: hidden;

    &__bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(155, 202, 242);
      transition: 0.5s;
      z-index: 0;

      &_0 {
        background-color: rgb(124, 185, 232);
      }

      &_1 {
        background-color: rgb(87, 67, 124);
      }

      &_2 {
        background-color: rgb(155, 202, 242);
      }

      &_3 {
        background-color: rgb(33, 34, 38);
      }
    }

    &__layers {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: none;
      z-index: 0;
      pointer-events: none;
    }
  }

  .item {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;

    @each $name, $d in $item-translates {
      &_#{$name} {
        animation-name: top-#{$name};
      }

      &_#{$name}_reverse {
        animation-name: top-reverse-#{$name};
      }
    }
  }

  @each $name, $d in $item-translates {
    @keyframes top-#{$name} {
      0% {
        transform: translate(0, $d);
      }
      100% {
        transform: translate(0, 0);
      }
    }

    @keyframes top-reverse-#{$name} {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(0, $d);
      }
    }
  }

  @keyframes bg-left {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }

  @keyframes bg-right {
    0% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
</style>
