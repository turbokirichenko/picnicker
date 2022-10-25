<script>
  import { location } from "svelte-spa-router";
  import Hcard from "~/widgets/hcard/hcard.svelte";
  import Layout from "~/widgets/layout/index.svelte";
  let view = false;
  let hash = $location.split("/")[2];
</script>

<div class="page">
  <Layout />
  <Hcard {view} {hash} />
</div>

<style lang="scss">
  .page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
</style>
