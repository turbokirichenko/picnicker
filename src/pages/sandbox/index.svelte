<script>
  import { fade } from "svelte/transition";
  import { cardModule } from "~/entities/card";
  import Hcard from "~/widgets/hcard/index.svelte";
  import AnimateLayout from "~/widgets/animate-layout/index.svelte";
  import QRcode from "~/widgets/qr-code.svelte";
  import MenuButton from "~/widgets/menu-button.svelte";
  import PhoneSimulation from "~/widgets/phone-simulation.svelte";

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

<div transition:fade={{ duration: 1000 }} class="place">
  <PhoneSimulation>
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
  </PhoneSimulation>
</div>

<style lang="scss">
  .place {
    width: 100%;
    height: 100vh;
    min-height: 720px;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .phone-simulation {
    width: 100%;
    height: 100%;
    &__content {
      width: 100%;
      height: 100%;
      position: relative;
      top: 0;
      left: 0;
    }
  }
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
    left: calc(50% - 144px);
    width: 288px;
    height: 100px;
  }
  .hcard-wrapper {
    position: absolute;
    top: calc(50% - 144px);
    left: calc(50% - 144px);
    width: 288px;
    height: 288px;
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

  @media (min-width: 900px) {
    .phone-simulation {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 480px;
      width: 90%;
      height: 90%;

      &__content {
        border-radius: 30px;
        width: 85%;
        height: 90%;
        position: relative;
        top: 0;
        left: 0;
        border: 10px solid #f9f9f980;
        overflow: hidden;
      }
    }
  }
</style>
