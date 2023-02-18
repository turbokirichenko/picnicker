<script>
  import { classes } from "~/shared/utils/classes";
  export let title = "";
  export let text = "";
  export let bg = false;
  export let color = "";
</script>

<div
  class={classes(
    "main-circle",
    bg && "main-circle__bg",
    color && `main-circle__${color}`
  )}
>
  <h1 class="main-circle__title">{title}</h1>
  <p class="main-circle__text">
    {text}
  </p>
  <div class="main-circle__slot">
    <slot />
  </div>
</div>

<style lang="scss">
  .main-circle {
    width: 100%;
    height: 100%;
    border: 10px solid #262626;
    border-radius: 50%;
    padding-top: 40px;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    color: #262626;

    &__bg {
      background-color: #262626;
      color: #f9f9f9;
      border-color: #f9f9f9;
    }

    &__red {
      background-color: #d93d04;
      color: #f9f9f9;
      border-color: #f9f9f9;
    }

    &__yellow {
      background-color: #ffcc00;
      color: #f9f9f9;
      border-color: #f9f9f9;
    }

    &__violet {
      background-color: #f77eff;
      color: #f9f9f9;
      border-color: #f9f9f9;
    }

    &__title {
      max-width: 60%;
      text-align: center;
      margin: 0;
    }

    &__text {
      padding: 0;
      font-size: 26px;
      max-width: 80%;
      text-align: center;
    }

    &__slot {
      width: 100%;
      height: auto;
    }
  }
</style>
