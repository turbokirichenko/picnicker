<script>
  import { location } from "svelte-spa-router";
  import { cardModule } from "~/entities/card";
  import Page from "~/widgets/page/index.svelte";
  import Hcard from "~/widgets/hcard/index.svelte";
  import Layout from "~/widgets/animate-layout/index.svelte";

  let locationStr = $location.split("/")[2];
  const [hash, layerNum] = locationStr?.split(".");
  const [v, dataHook] = cardModule.decodeDataSnap(hash);

  let layer = Number(layerNum) || 0;
  const view = true;

  $: data = { ...dataHook, ...data };
</script>

<Page>
  <Layout {view} bind:layer>
    <div class="hcard-wrapper">
      <Hcard {view} bind:data />
    </div>
  </Layout>
</Page>

<style lang="scss">
  .hcard-wrapper {
    position: absolute;
    top: calc(50% - 145px);
    left: calc(50% - 145px);
    width: 290px;
    height: 290px;
  }
</style>
