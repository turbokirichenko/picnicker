<script>
  import Routing from "./routing.svelte";
  import Page from "~/widgets/page/index.svelte";
</script>

<main class="app">
  <Page>
    <Routing />
  </Page>
</main>

<style lang="scss">
  .app {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
  }
</style>
