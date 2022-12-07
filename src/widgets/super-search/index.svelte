<script>
  import { classes } from "~/shared/utils/classes.js";
  import SearchSvg from "~/shared/icons/search.svg";
  let elapsed = true;
</script>

<div class="super-search">
  <div
    class={classes(
      "super-search__block",
      `super-search__block-${elapsed ? "elapsed" : "full"}`
    )}
  >
    {#if elapsed}
      <div class="elapsed-search">
        <div class="elapsed-search__content">
          <button
            on:click={(e) => {
              elapsed = !elapsed;
            }}
            class="bar-button"
          >
            <img src={SearchSvg} class="bar-button__img" alt="altright" />
          </button>
        </div>
      </div>
    {:else}
      <div class="full-search">
        <div class="full-search__filter">
          <button
            on:click={(e) => {
              elapsed = !elapsed;
            }}
            class="bar-button"
          >
            <img src={SearchSvg} class="bar-button__img" alt="altright" />
          </button>
        </div>
        <div class="full-search__input">
          <input class="bar-input" placeholder="телефон, email, ссылка..." />
        </div>
        <div class="full-search__close">
          <button
            on:click={(e) => {
              elapsed = !elapsed;
            }}
            class="bar-button"
          >
            <img src={SearchSvg} class="bar-button__img" alt="altright" />
          </button>
        </div>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .super-search {
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: stretch;

    &__block {
      border: 3px solid #f9f9f9;
      border-radius: 10000px;
      transition: width 0.3s;
      height: 5vmax;
      min-height: 60px;

      &-elapsed {
        width: 5vmax;
        min-width: 60px;
      }

      &-full {
        width: 100%;
      }
    }
  }

  .elapsed-search {
    width: 100%;
    height: 100%;

    &__content {
      width: 100%;
      height: 100%;
    }
  }

  .full-search {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    &__input {
      flex-grow: 1;
    }
  }

  .bar-button {
    background: none;
    border: none;
    aspect-ratio: 1 / 1;
    height: 100%;
    padding: 0;
    filter: invert(1);
    display: flex;
    justify-content: center;
    align-items: center;

    &__img {
      display: block;
      width: 40%;
      height: 40%;
    }
  }

  .bar-input {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    color: #f9f9f9;
    font-size: 21px;
    font-family: Comfortaa;

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #f9f9f980;
      width: 100%;
      font-size: 18px;
    }
  }
</style>
