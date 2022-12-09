<script>
  import { classes } from "~/shared/utils/classes.js";
  import SearchSvg from "~/shared/icons/search.svg";
  import FilterSvg from "~/shared/icons/filter-large.svg";
  import PlusLargeSvg from "~/shared/icons/plus-large.svg";
  import DropMenu from "~/features/drop-menu.svelte";
  import AddMenu from "./ui/add-menu.svelte";
  import BarButton from "./ui/bar-button.svelte";
  import BarInput from "./ui/bar-input.svelte";
  import ImportItems from "./ui/import-items.svelte";
  import PatternItems from "./ui/pattern-items.svelte";

  import { ANIMATION_DURATION_MS } from "./constants";

  const DEFAULT_INPUT_PLACEHOLDER = "nickname | phone | email";
  const state = {
    elapsed: true,
    searched: "",
    left: {
      action: "plus",
      active: false,
      effect: "",
    },
    right: {
      action: "search",
      active: false,
      effect: "",
    },
    input: {
      action: "",
      placeholder: DEFAULT_INPUT_PLACEHOLDER,
    },
  };

  export let elapsed = true;
  $: elapsed = state.elapsed;

  const disabledActive = () => {
    state["left"].active = false;
    state["right"].active = false;
  };

  const clearInput = () => {
    disabledActive();
    state["searched"] = "";
  };

  const disableElapsed = () => {
    disabledActive();
    state["elapsed"] = false;
  };

  const enableElapsed = () => {
    disabledActive();
    state["elapsed"] = true;
  };

  const switchLeftAction = (action) => {
    disabledActive();
    state["left"].action = action;
  };

  const switchRightAction = (action) => {
    disabledActive();
    state["right"].active = false;
    state["right"].effect = "exit";
    setTimeout(() => {
      state["right"].action = action;
      state["right"].effect = "";
    }, ANIMATION_DURATION_MS);
  };

  const switchActive = (pos) => {
    const active = state[pos].active;
    disabledActive();
    state[pos].active = !active;
  };

  const switchLeftActive = () => {
    const pos = "left";
    switchActive(pos);
  };

  const switchRightActive = () => {
    const pos = "right";
    switchActive(pos);
  };

  //clicked actions
  const clickSearchButton = (e) => {
    disableElapsed();
    switchRightAction("filter");
  };
  const clickFilterButton = (e) => {
    switchRightActive();
  };
  const clickSelectButton = (e) => {
    return;
  };
  const clickPlusButton = (e) => {
    switchLeftActive();
  };
  const clickCloseButton = (e) => {
    clearInput();
  };

  const clickAction = {
    search: {
      icon: SearchSvg,
      fn: clickSearchButton,
    },
    filter: {
      icon: FilterSvg,
      fn: clickFilterButton,
    },
    select: {
      icon: SearchSvg,
      fn: clickSelectButton,
    },
    plus: {
      icon: PlusLargeSvg,
      fn: clickPlusButton,
    },
    close: {
      icon: PlusLargeSvg,
      fn: clickCloseButton,
    },
  };

  const scrollWindow = (e) => {
    disabledActive();
  };
  const clickWindow = (e) => {
    // exit only from 'filter' mode
    if (state.searched || state.elapsed) return;
    state["input"].action = "";
    state["input"].placeholder = DEFAULT_INPUT_PLACEHOLDER;
    switchLeftAction("plus");
    switchRightAction("search");
    enableElapsed();
  };
  window.onclick = clickWindow;
  window.onscroll = scrollWindow;

  const checkoutInputMode = (str, actionRight, actionLeft) => {
    if (actionRight === "search") return;
    const checkoutInputRight = (str, actionRight) => {
      if (str && actionRight === "filter") {
        switchRightAction("select");
      }
      if (!str && actionRight === "select") {
        switchRightAction("filter");
      }
    };
    const checkoutInputLeft = (str, actionLeft) => {
      if (str && actionLeft === "plus") switchLeftAction("close");
      if (!str && actionLeft === "close") switchLeftAction("plus");
    };
    checkoutInputRight(str, actionRight);
    checkoutInputLeft(str, actionLeft);
  };
  $: checkoutInputMode(
    state.searched,
    state["right"].action,
    state["left"].action
  );
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="super-search"
  on:click={(e) => {
    e.stopPropagation();
  }}
>
  <DropMenu>
    <div slot="menu" class="menu-wrapper">
      <AddMenu
        bind:right={state["right"].active}
        bind:left={state["left"].active}
      >
        <PatternItems
          slot="right"
          bind:inputMethod={state["input"].action}
          bind:placeholderState={state["input"].placeholder}
        />
        <ImportItems slot="left" />
      </AddMenu>
    </div>
    <div
      slot="children"
      class={classes(
        "super-search__block",
        `super-search__block-${state.elapsed ? "elapsed" : "full"}`
      )}
    >
      <div class="search-bar">
        <div class="search-bar__left-wing">
          <BarButton clicked={clickAction[state["left"].action].fn}>
            <img
              class={classes(
                "animated-img",
                state["left"].action === "close"
                  ? "animated-img_rotate-right"
                  : "animated-img_rotate-left",
                state["left"].active && "animated-img_active"
              )}
              src={clickAction[state["left"].action].icon}
              alt="searching"
            />
          </BarButton>
        </div>
        <div class="search-bar__middle">
          <BarInput
            bind:searched={state.searched}
            theme={state["input"].action}
            placeholder={state["input"].placeholder}
          />
        </div>
        <div class="search-bar__right-wing">
          <BarButton clicked={clickAction[state["right"].action].fn}>
            <img
              class={classes(
                "animated-img",
                state["right"].effect === "exit"
                  ? "animated-img_exit"
                  : "animated-img_entry",
                state["right"].active && "animated-img_active"
              )}
              src={clickAction[state["right"].action].icon}
              alt="searching"
            />
          </BarButton>
        </div>
      </div>
    </div>
  </DropMenu>
</div>

<style lang="scss">
  .super-search {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: stretch;

    &__block {
      position: relative;
      top: 0;
      left: 0;
      transition: clip-path 0.3s;
      width: 100%;
      height: 100%;

      &-elapsed {
        -webkit-clip-path: inset(0 0 0 calc(100% - 60px) round 1000px);
        clip-path: inset(0 0 0 calc(100% - 60px) round 1000px);
      }

      &-full {
        -webkit-clip-path: inset(0 round 1000px);
        clip-path: inset(0 round 1000px);
      }
    }
  }

  .search-bar {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #f9f9f980;

    &__left-wing {
      aspect-ratio: 1 /1;
      height: 100%;
    }

    &__middle {
      flex-grow: 1;
      height: 80%;
    }

    &__right-wing {
      aspect-ratio: 1 /1;
      height: 100%;
    }
  }

  .animated-img {
    display: block;
    width: 100%;
    transition: filter 0.3s;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;

    &_exit {
      opacity: 1;
      animation-name: exit;
    }

    &_entry {
      opacity: 0;
      animation-name: entry;
    }

    &_active {
      filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg)
        brightness(95%) contrast(80%);
    }

    &_rotate-right {
      animation-name: rotate-45deg;
    }

    &_rotate-left {
      animation-name: rotate-45deg-reverse;
    }
  }

  @keyframes entry {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes rotate-45deg {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(45deg);
    }
  }

  @keyframes rotate-45deg-reverse {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes exit {
    0% {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
    100% {
      opacity: 0.1;
      transform: scale(0.5) rotate(360deg);
    }
  }
</style>
