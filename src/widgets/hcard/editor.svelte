<script>
  import { classes } from "../../shared/utils/classes.js";
  import { createBEM } from "../../shared/utils/create-bem.js";
  export let color;
  export let contacts;
  export let theme;
  export let bio;

  let checked = 0;
  const setChecked = (i) => () => {
    checked = i;
  };
  const breakChecked = (i) => () => {
    checked = -1;
  };
</script>

<div class="editor">
  <textarea
    rows="1"
    maxlength="33"
    bind:value={bio}
    class={classes(
      createBEM("editor", "heading"),
      createBEM("editor", "heading", theme)
    )}
    placeholder="Tap to set your bio"
  />
  <div class="contacts">
    {#each Array(3) as _, i}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <input
        type="text"
        placeholder="phone / email / link ..."
        bind:value={contacts[i]}
        on:focus={setChecked(i)}
        on:blur={breakChecked()}
        class={classes(
          createBEM("contacts", "item"),
          createBEM("contacts", "item", i != checked && "disabled"),
          createBEM("contacts", "item", "type", color),
          createBEM("contacts", "item", contacts[i] ? "not-empty" : "empty")
        )}
      />
    {/each}
  </div>
</div>

<style lang="scss">
  $colors: (
    tomato: tomato,
    greenwood: #1fbc1a,
    spaceline: #f77eff,
  );

  $bg-colors: (
    dark: #222,
    light: #fff,
  );

  $ft-colors: (
    dark: #fff,
    light: #222,
  );

  .editor {
    display: block;
    width: 100%;
    height: 100%;
    padding: 40px 20px;

    &__heading {
      display: block;
      resize: none;
      border: none;
      background: none;
      font-size: 16px;
      line-height: 18px;
      width: 100%;
      height: 44px;
      padding-right: 40px;
      overflow: hidden;

      &:focus {
        outline: none;
      }

      @each $name, $color in $ft-colors {
        &_#{$name} {
          color: $color;
        }
      }
    }
  }

  .contacts {
    display: flex;
    padding-top: 28px;
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

      &::placeholder {
        color: #f9f9f940;
        font-size: 14px;
        padding: 4px;
      }

      &_not-empty {
        background: none !important;
      }

      &_disabled {
        opacity: 0.5;
        color: #00000000;
        &::placeholder {
          color: #00000000;
        }
      }

      &_type {
        @each $name, $color in $colors {
          &_#{$name} {
            color: $color;
            background-color: $color;
          }
        }
      }
    }
  }
</style>
