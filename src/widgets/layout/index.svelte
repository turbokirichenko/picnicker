<script>
  import { classes } from "../../shared/utils/classes.js";
  import { createBEM } from "../../shared/utils/create-bem.js";
  import SunLayer1 from "~/shared/bg/sun-layers/sun-layer1.svg";
  import SunLayer2 from "~/shared/bg/sun-layers/sun-layer2.svg";
  import SunLayer3 from "~/shared/bg/sun-layers/sun-layer3.svg";
  import SunLayer4 from "~/shared/bg/sun-layers/sun-layer4.svg";
  import SunLayer5 from "~/shared/bg/sun-layers/sun-layer5.svg";
  import PlanetLayer1 from "~/shared/bg/planet-layers/planet-layer1.svg";
  import PlanetLayer2 from "~/shared/bg/planet-layers/planet-layer2.svg";
  import PlanetLayer3 from "~/shared/bg/planet-layers/planet-layer3.svg";
  import PlanetLayer4 from "~/shared/bg/planet-layers/planet-layer4.svg";
  import PlanetLayer5 from "~/shared/bg/planet-layers/planet-layer5.svg";

  const layerArr1 = [SunLayer1, SunLayer2, SunLayer3, SunLayer4, SunLayer5];
  const layerArr2 = [
    PlanetLayer1,
    PlanetLayer2,
    PlanetLayer3,
    PlanetLayer4,
    PlanetLayer5,
  ];

  const subArr = [layerArr1, layerArr2];

  let layer = 0;
  let onload = false;
  let set = 0;
  const onDBClick = () => {
    if (onload) return;
    onload = true;
    set = 1;
    setTimeout(() => {
      set = 0;
      layer = (layer + 1) % 2;
    }, 2000);

    setTimeout(() => {
      onload = false;
    }, 4000);
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class={classes("bg", "bg_" + layer)} on:click={onDBClick}>
  <section class="layout">
    {#each Array(5) as _, i}
      <img
        class={classes(
          "item",
          createBEM("item", "", String(Number(5 - i)), set && "reverse")
        )}
        src={subArr[layer][4 - i]}
        alt="parallax-layer"
      />
    {/each}
  </section>
</div>

<style lang="scss">
  $item-translates: (
    1: 100%,
    2: 110%,
    3: 120%,
    4: 130%,
    5: 140%,
  );

  .bg {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    overflow: hidden;
    background: linear-gradient(270deg, #80e5ff, #214478);
    background-size: 400% 400%;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-name: bg-left;

    &_0 {
      animation-name: bg-left;
    }

    &_1 {
      animation-name: bg-right;
    }
  }

  .layout {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: none;
  }

  .item {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    animation-duration: 4s;
    animation-fill-mode: forwards;

    @each $name, $d in $item-translates {
      &_#{$name}0 {
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
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

  @keyframes bg-right {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
