<script>
  import { classes } from "~/shared/utils/classes";
  export let right = false;
  export let left = false;

  let state = {
    name: "collapsed", // open
    effect: "", // exit
  };

  const collapse = () => {
    if (state.name === "collapsed") return;
    state.effect = "exit";
    setTimeout(() => {
      state.name = "collapsed";
      state.effect = "";
    }, 200);
  };

  const open = () => {
    state.display = true;
    if (left) state.name = "left";
    if (right) state.name = "right";
  };

  $: !right && !left ? collapse() : open();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="add-menu"
  on:click={(e) => {
    left = false;
    right = false;
  }}
>
  <div
    class={classes(
      "add-menu__content",
      state.effect === "exit"
        ? "add-menu__content_exit"
        : "add-menu__content_entry",
      state.name === "collapsed" && "add-menu__content_collapsed"
    )}
  >
    {#if state.name === "right"}
      <slot name="right" />
    {/if}
    {#if state.name === "left"}
      <slot name="left" />
    {/if}
  </div>
</div>

<style lang="scss">
  .add-menu {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;

    &__content {
      width: 100%;
      height: auto;
      background-color: #f9f9f980;
      animation-duration: 0.2s;
      animation-fill-mode: forwards;
      transition: clip-path 0.2s;

      &_collapsed {
        display: none;
      }

      &_exit {
        animation-name: exit-clip;
      }

      &_entry {
        animation-name: entry-clip;
      }
    }
  }

  @keyframes entry-clip {
    0% {
      clip-path: inset(0 0 100% round 30px);
    }
    100% {
      clip-path: inset(0 0 round 30px);
    }
  }
  @keyframes exit-clip {
    0% {
      clip-path: inset(0 0 round 30px);
    }
    100% {
      clip-path: inset(0 0 100% round 30px);
    }
  }
</style>
