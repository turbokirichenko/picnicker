<script>
  import { location } from "svelte-spa-router";
  import { cardModule } from "~/entities/card";
  import Page from "~/widgets/page/index.svelte";
  import Hcard from "~/widgets/hcard/index.svelte";
  import Layout from "~/widgets/layout/index.svelte";
  import MenuButton from "./ui/menu-button.svelte";

  let locationStr = $location.split("/")[2];
  const [hash, layerNum] = locationStr?.split(".");
  const [v, dataHook] = cardModule.decodeDataSnap(hash);

  let layer = Number(layerNum) || 0;
  const view = false;

  $: data = { ...dataHook, ...data };
</script>

<Page>
  <Layout {view} bind:layer>
    <header class="header-wrapper">
      <MenuButton />
    </header>
    <div class="hcard-wrapper">
      <Hcard {view} bind:data />
    </div>
    <footer class="footer-wrapper" />
  </Layout>
</Page>

<style lang="scss">
  .header-wrapper {
    position: absolute;
    top: 10%;
    left: calc(50% - 145px);
    width: 290px;
    height: 72px;
  }
  .hcard-wrapper {
    position: absolute;
    top: calc(50% - 145px);
    left: calc(50% - 145px);
    width: 290px;
    height: 290px;
  }
</style>
