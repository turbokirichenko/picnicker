<script>
  import { classes } from "../../shared/utils/classes.js";
  import { createBEM } from "../../shared/utils/create-bem.js";
  export let color;
  export let contacts;
  export let theme;
  export let bio;

  let copytext;
</script>

<div class="viewer">
  <section
    class={classes(
      createBEM("viewer", "heading"),
      createBEM("viewer", "heading", theme)
    )}
  >
    {bio}
  </section>
  <section class="contacts">
    {#each contacts as contact, i}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        bind:this={copytext}
        class={classes(
          createBEM("contacts", "item"),
          createBEM("contacts", "item", "type", color)
        )}
      >
        {contact}
      </div>
    {/each}
  </section>
</div>

<style lang="scss">
  @use "colors";

  .viewer {
    display: block;
    width: 100%;
    height: 100%;
    padding: 40px 20px;
    text-align: left;

    &__heading {
      display: block;
      background: none;
      font-size: 16px;
      line-height: 18px;
      width: 100%;
      height: 44px;
      padding-right: 40px;
      font-weight: 500;
      overflow: hidden;

      @each $name, $color in colors.$ft-colors {
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
      background: none;
      text-align: left;

      &_type {
        @each $name, $color in colors.$colors {
          &_#{$name} {
            color: $color;
          }
        }
      }
    }
  }
</style>
