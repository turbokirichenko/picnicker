<script>
  import { cardModule } from "~/entities/card";
  import Page from "~/widgets/page/index.svelte";
  import Hcard from "~/widgets/hcard/index.svelte";
  import AnimateLayout from "~/widgets/animate-layout/index.svelte";
  import QRcode from "~/widgets/qr-code.svelte";
  import MenuButton from "~/widgets/menu-button.svelte";

  let layer = 0;
  let openQR = false;
  let screenshotMode = false;
  const viewMode = false;
  const dataHook = {};
  $: data = { ...dataHook, ...data };
  // create link for QR
  $: hash = openQR && cardModule.createDataSnap(data, String(layer));
  $: console.log(hash);
</script>

<Page>
  <AnimateLayout view={viewMode} bind:layer>
    {#if screenshotMode}
      <div class="screenshot-layout" />
      <div class="screenshot-line" />
    {:else}
      <div class="menu-wrapper">
        <MenuButton bind:openQR />
      </div>
      <footer class="footer-wrapper" />
    {/if}
    <div class="hcard-wrapper">
      {#if openQR}
        <QRcode {hash} bind:clicked={screenshotMode} />
      {:else}
        <Hcard view={viewMode} bind:data />
      {/if}
    </div>
  </AnimateLayout>
</Page>

<style lang="scss">
  .screenshot-layout {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .screenshot-line {
    position: absolute;
    top: 15px;
    left: 0;
    height: 16px;
    width: 100%;
    padding: 5px 20px;
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      animation-name: time-line;
      animation-duration: 5s;
      animation-timing-function: linear;
      background-color: #d93d04;
      border-radius: 5px;
    }
  }
  .menu-wrapper {
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
  .footer-wrapper {
    position: absolute;
    bottom: 10%;
    left: calc(50% - 145px);
    width: 290px;
    min-height: 72px;
    pointer-events: none;
  }
  @keyframes time-line {
    0% {
      width: 100%;
    }
    100% {
      width: 0%;
    }
  }
</style>
