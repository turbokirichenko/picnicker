<script>
  import { classes } from "~/shared/utils/classes";
  export let closed = true;
  let state = {
    name: "collapsed", // open
    effect: "", // exit
  };

  const collapse = () => {
    if (state.name === "collapsed") return;
    state.effect = "exit";
    setTimeout(() => {
      console.log("collapse");
      state.name = "collapsed";
      state.effect = "";
    }, 200);
  };

  const open = () => {
    state.display = true;
    state.name = "open";
  };

  $: closed ? collapse() : open();
</script>

<div class="add-menu">
  <div
    class={classes(
      "add-menu__content",
      state.effect === "exit"
        ? "add-menu__content_exit"
        : "add-menu__content_entry",
      state.name === "collapsed" && "add-menu__content_collapsed"
    )}
  >
    <slot />
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
      background-color: #f9f9f940;
      animation-duration: 0.2s;
      animation-fill-mode: forwards;

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
