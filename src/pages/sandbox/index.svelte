<script>
  import Hcard from "~/widgets/hcard/hcard.svelte";
  import Layout from "~/widgets/layout/index.svelte";

  export let location = "";
  let view = false;
  let [hash, bgName] = location.split("/")[2].split(".");
  let layer = Number(bgName);
</script>

<div class="page">
  <Layout {view} bind:layer />
  <Hcard {view} bind:hash />
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
