<script>
  import { classes } from "~/shared/utils/classes";
  export let title = "";
  export let text = "";
  export let bg = false;
</script>

<div class={classes("main-circle", bg && "main-circle__bg")}>
  <h1 class="main-circle__title">{title}</h1>
  <p class="main-circle__text">
    {text}
  </p>
</div>

<style lang="scss">
  .main-circle {
    width: 100%;
    height: 100%;
    border: 10px solid black;
    border-radius: 50%;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    color: black;

    &__bg {
      background-color: black;
      color: white;
      border-color: white;
    }

    &__title {
      max-width: 60%;
      text-align: center;
    }

    &__text {
      padding: 0;
      font-size: 26px;
      max-width: 60%;
      text-align: center;
    }
  }
</style>
