<script>
  import { classes } from "~/shared/utils/classes";
  import bxSun from "~/shared/icons/bx-sun.svg";
  import bxNight from "~/shared/icons/bx-night.svg";
  export let dark = false;
  export let hide = false;

  let state = {
    name: "light",
    effect: "",
  };

  let timeoutID = false;
  const setTheme = (theme) => {
    if (timeoutID) return;
    state.effect = "exit";
    timeoutID = true;
    setTimeout(() => {
      state.name = theme;
      state.effect = "";
      timeoutID = false;
    }, 200);
  };

  const actions = {
    light: {
      icon: bxSun,
      fn: () => {
        dark = true;
      },
    },
    dark: {
      icon: bxNight,
      fn: () => {
        dark = false;
      },
    },
  };

  $: dark ? setTheme("dark") : setTheme("light");
</script>

<div class={classes("theme-button", hide && "theme-button_hide")}>
  <div class="theme-button__content">
    <button class="toggle-theme" on:click={actions[state.name].fn()}>
      <div class="toggle-theme__content">
        <img
          class={classes(
            "animate-img",
            state.effect === "exit" ? "animate-img_exit" : "animate-img_entry"
          )}
          src={actions[state.name].icon}
          alt="theme icon"
        />
      </div>
    </button>
  </div>
  <div class="theme-button__notice">
    <div>
      <span>tap twice to change theme!</span>
    </div>
  </div>
</div>

<style lang="scss">
  .theme-button {
    width: 100%;
    max-width: 280px;
    height: 60px;
    background: #f9f9f940;
    border-radius: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation-name: clip-border;
    animation-duration: 20s;
    animation-iteration-count: 5;
    animation-fill-mode: forwards;
    transition: opacity 0.5s;

    &_hide {
      opacity: 0;
    }

    &__content {
      aspect-ratio: 1 / 1;
      height: 100%;
    }

    &__notice {
      width: 100%;
      font-family: Comfortaa;
      font-size: 16px;
      color: white;
      text-align: center;
      padding: 3px 12px;
    }
  }
  .toggle-theme {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: none;
    background: none;

    &:focus {
      outline: none;
    }

    &__content {
      display: block;
      width: 50%;
      height: 50%;
    }
  }

  .animate-img {
    width: 100%;
    display: block;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
    &_exit {
      animation-name: exit;
    }
    &_entry {
      animation-name: entry;
    }
  }

  @keyframes clip-border {
    0% {
      clip-path: inset(0 calc(100% - 60px) 0 0 round 1000px);
    }
    5% {
      clip-path: inset(0 0 0 0 round 1000px);
    }
    25% {
      clip-path: inset(0 0 0 0 round 1000px);
    }
    30% {
      clip-path: inset(0 calc(100% - 60px) 0 0 round 1000px);
    }
    100% {
      clip-path: inset(0 calc(100% - 60px) 0 0 round 1000px);
    }
  }

  @keyframes exit {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.3);
    }
  }

  @keyframes entry {
    0% {
      opacity: 0.5;
      transform: scale(0.1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
