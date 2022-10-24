<script>
  import Routing from "./routing.svelte";
</script>

<main class=".app">
  <Routing />
</main>

<style lang="scss">
  .app {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
    top: 0;
    left: 0;
  }

  .heading {
    color: tomato;
    font-weight: 700;
    font-size: 2em;
    font-family: "Courier New";
  }
</style>
