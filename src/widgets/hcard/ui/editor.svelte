<script>
  import { classes } from "~/shared/utils/classes.js";
  import { createBEM } from "~/shared/utils/create-bem.js";
  export let allowEdit = true;
  export let theme;
  export let color;
  export let contacts;
  export let bio;

  const maxSizeOfBio = 33;
  const maxSizeOfInput = 256;

  let checked = 0;
  const setChecked = (i) => () => {
    checked = i;
  };
  const breakChecked = (i) => () => {
    checked = -1;
  };
</script>

<div class="editor">
  <section class="editor__heading">
    <textarea
      rows="1"
      maxlength={maxSizeOfBio}
      disabled={!allowEdit}
      bind:value={bio}
      class={classes(createBEM("bioarea"), createBEM("bioarea", "", theme))}
      placeholder={allowEdit ? "tap to change bio..." : "some bio"}
    />
    {#if bio && allowEdit && maxSizeOfBio - bio.length}
      <div class="symbol-counter">{maxSizeOfBio - bio.length}</div>
    {/if}
  </section>
  <section class="editor__content">
    <div class="contacts">
      {#each Array(3) as _, i}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <input
          type="text"
          placeholder="phone / email / link ..."
          disabled={!allowEdit}
          maxlength={maxSizeOfInput}
          bind:value={contacts[i]}
          on:focus={setChecked(i)}
          on:blur={breakChecked()}
          class={classes(
            createBEM("contacts", "item"),
            createBEM("contacts", "item", i != checked && "disabled"),
            createBEM("contacts", "item", "type", color),
            createBEM("contacts", "item", contacts[i] ? "non-empty" : "empty")
          )}
        />
      {/each}
    </div>
  </section>
</div>

<style lang="scss">
  @use "../colors";

  .editor {
    display: block;
    width: 100%;
    height: 100%;
    padding: 40px 20px;

    &__heading {
      display: block;
      width: 100%;
      height: 70px;
      padding-right: 40px;
      position: relative;
      top: 0;
      left: 0;
      padding-bottom: 24px;
    }

    &__content {
      display: block;
      width: 100%;
      position: relative;
      top: 0;
      left: 0;
    }
  }

  .bioarea {
    display: block;
    resize: none;
    border: none;
    background: none;
    font-size: 16px;
    line-height: 18px;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &:focus {
      outline: none;
    }

    @each $name, $color in colors.$ft-colors {
      &_#{$name} {
        color: $color;
      }
    }
  }

  .symbol-counter {
    color: black;
    position: absolute;
    right: 0px;
    bottom: 24px;
    color: #888;
    width: 24px;
    height: 16px;
    line-height: 16px;
    font-size: 14px;
    text-align: center;
  }

  .contacts {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: stretch;
    gap: 16px;

    &__item {
      width: 100%;
      height: 24px;
      border-radius: 5px;
      background: tomato;
      border: none;
      font-size: 20px;
      text-overflow: ellipsis;
      overflow: hidden;
      padding-right: 20px;

      &:focus {
        outline: none;
      }

      &:disabled {
        background: none;
        opacity: 1;
        &::placeholder {
          display: none;
        }
      }

      &::placeholder {
        color: #f9f9f940;
        font-size: 14px;
        padding: 4px;
      }

      &_non-empty {
        background: none !important;
      }

      &_empty:disabled {
        display: none;
      }

      &_disabled {
        opacity: 0.5;
        color: #00000000;
        &::placeholder {
          color: #00000000;
        }
      }

      &_type {
        @each $name, $color in colors.$colors {
          &_#{$name} {
            color: $color;
            background-color: $color;
          }
        }
      }
    }
  }
</style>
