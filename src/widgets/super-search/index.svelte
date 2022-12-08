<script>
  import { classes } from "~/shared/utils/classes.js";
  import SearchSvg from "~/shared/icons/search.svg";
  import FilterSvg from "~/shared/icons/filter-large.svg";
  import PlusLargeSvg from "~/shared/icons/plus-large.svg";

  const animationDurationMs = 500;

  let elapsed = true;
  let leftWingState = "plus"; // plus | close
  let rightWingState = "search"; // search | filter;
  let filterActive = false;
  let chooseActive = false;
  let searchingString = "";

  let switchDisplayMode = (e) => {
    elapsed = false;
    setTimeout(() => {
      rightWingState = "filter";
    }, animationDurationMs);
  };
  let switchElapsedMode = (e) => {
    elapsed = true;
    filterActive = false;
    chooseActive = false;
    searchingString = "";
    leftWingState = "plus";
    setTimeout(() => {
      rightWingState = "search";
    }, animationDurationMs);
  };
  let clickFilterButton = (e) => {
    filterActive = !filterActive;
    chooseActive = false;
  };
  let clickPlusButton = (e) => {
    chooseActive = !chooseActive;
    filterActive = false;
  };
  let clickCloseButton = (e) => {
    filterActive = false;
    chooseActive = false;
    searchingString = "";
  };

  window.onclick = (e) => {
    // if input from focus then not elapse
    if (searchingString) return;
    switchElapsedMode(e);
  };
  $: leftWingState = searchingString ? "close" : "plus";
  $: searchingString && (chooseActive = filterActive = false);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="super-search"
  on:click={(e) => {
    e && e.stopPropagation();
  }}
>
  <div
    class={classes(
      "super-search__block",
      `super-search__block-${elapsed ? "elapsed" : "full"}`
    )}
  >
    <div class="search-bar">
      <div class="search-bar__left-wing">
        {#if leftWingState === "close"}
          <button on:click={clickCloseButton} class="bar-button">
            <div class="bar-button__content">
              <img
                class={classes("animated-img", "animated-img_rotate-right")}
                src={PlusLargeSvg}
                alt="searching"
              />
            </div>
          </button>
        {/if}
        {#if leftWingState === "plus"}
          <button on:click={clickPlusButton} class="bar-button">
            <div class="bar-button__content">
              <img
                class={classes(
                  "animated-img",
                  "animated-img_rotate-left",
                  chooseActive && "animated-img_active"
                )}
                src={PlusLargeSvg}
                alt="searching"
              />
            </div>
          </button>
        {/if}
      </div>
      <div class="search-bar__middle">
        <input class="bar-input" bind:value={searchingString} />
      </div>
      <div class="search-bar__right-wing">
        {#if rightWingState === "search"}
          <button on:click={switchDisplayMode} class="bar-button">
            <div class="bar-button__content">
              <img
                class={classes(
                  "animated-img",
                  elapsed ? "animated-img_entry" : "animated-img_exit"
                )}
                src={SearchSvg}
                alt="searching"
              />
            </div>
          </button>
        {/if}
        {#if rightWingState === "filter"}
          <button on:click={clickFilterButton} class="bar-button">
            <div class="bar-button__content">
              <img
                class={classes(
                  "animated-img",
                  elapsed ? "animated-img_exit" : "animated-img_entry",
                  filterActive && "animated-img_active"
                )}
                src={FilterSvg}
                alt="searching"
              />
            </div>
          </button>
        {/if}
      </div>
    </div>
  </div>
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
    width: 100%;
    height: 100%;
    background-color: #f9f9f980;

    &__left-wing {
      aspect-ratio: 1 /1;
      height: 100%;
    }

    &__middle {
      flex-grow: 1;
      height: 100%;
    }

    &__right-wing {
      aspect-ratio: 1 /1;
      height: 100%;
    }
  }

  .bar-button {
    background: none;
    border: none;
    width: 100%;
    height: 100%;
    padding: 0;
    filter: invert(1);
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus {
      outline: none;
    }

    &__content {
      display: block;
      width: 40%;
      height: 40%;
    }
  }

  .bar-input {
    background: none;
    border: none;
    width: 100%;
    height: 100%;
    padding: 0;
    font-size: 21px;
    color: #f9f9f9;

    &:focus {
      outline: none;
    }
  }

  .animated-img {
    display: block;
    width: 100%;
    transition: filter 0.3s;
    filter: invert(0);
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
      filter: invert(1);
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
      opacity: 0;
      transform: scale(0.2) rotate(360deg);
    }
  }
</style>
