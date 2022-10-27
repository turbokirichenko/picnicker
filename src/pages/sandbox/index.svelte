<script>
  import { location } from "svelte-spa-router";
  import { cardModule } from "~/entities/card";
  import Page from "~/widgets/page/index.svelte";
  import Hcard from "~/widgets/hcard/index.svelte";
  import Layout from "~/widgets/layout/index.svelte";
  import MenuButton from "./ui/menu-button.svelte";
  import PageNotice from "./ui/page-notice.svelte";
  import Bar from "~/widgets/bar/index.svelte";
  import QRcode from "~/shared/utils/qr-code-svg";

  console.log($location);
  let locationStr = $location.split("/")[2];
  const [hash, layerNum] = locationStr ? locationStr.split(".") : ["", 0];
  const [v, dataHook] = cardModule.decodeDataSnap(hash);

  let layer = Number(layerNum) || 0;
  let openQR = false;
  let QR_URL = "";
  let screenshotMode = false;
  const view = false;

  const activateScreenShotMode = () => {
    if (screenshotMode) return;
    screenshotMode = true;
    setTimeout(() => {
      screenshotMode = false;
    }, 5000);
  };

  const createRefer = (data, layer) => {
    const accountPrefix = "https://hcard-club.github.io/#/viewbox";
    const accountHash = `${cardModule.createDataSnap(data)}.${layer}`;
    return `${accountPrefix}/${accountHash}`;
  };

  const createQRcode = (refer) => {
    try {
      const qr = new QRcode({
        content: refer,
        join: true,
        container: "svg-viewbox",
        padding: 0,
        width: 228,
        height: 228,
        color: "#090909",
        background: "#ffffff00",
      });
      const qr_img = qr.svg();
      return qr_img;
    } catch (err) {
      console.log(err);
    }
  };

  const createSvgUrl = () => {
    const svgPrefix = "data:image/svg+xml;base64,";
    const refer = createRefer(data, layer);
    const svgStr = createQRcode(refer);
    const base64data = window.btoa(svgStr);
    return `${svgPrefix}${base64data}`;
  };

  $: data = { ...dataHook, ...data };
  $: if (openQR) QR_URL = createSvgUrl();
</script>

<Page>
  <Layout {view} bind:layer>
    {#if screenshotMode}
      <div class="timeline" />
    {:else}
      <header class="header-wrapper">
        <MenuButton bind:openQR />
      </header>
      <footer class="footer-wrapper">
        {#if openQR}
          <PageNotice
            noticeText={"Tap on the QR picture to activate the Screenshot mode!"}
          />
        {/if}
      </footer>
    {/if}
    <div class="hcard-wrapper">
      {#if openQR}
        <Bar>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div class="qr-show" on:click={activateScreenShotMode}>
            <img class="qr-show__image" src={QR_URL} alt="qr" />
          </div>
        </Bar>
      {:else}
        <Hcard {view} bind:data />
      {/if}
    </div>
  </Layout>
</Page>

<style lang="scss">
  .timeline {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    padding: 2px;

    &::after {
      content: "";
      height: 100%;
      border-radius: 4px;
      padding: 2px;
      background: #d93d04;
      display: block;
      animation-name: line;
      animation-duration: 5s;
      animation-timing-function: linear;
    }
  }
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
  .qr-show {
    width: 100%;
    height: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    &__image {
      display: block;
      width: 240px;
      padding: 15px;
      border-radius: 15px;
      background-color: #f4f4f4;
    }
  }
  .footer-wrapper {
    position: absolute;
    bottom: 10%;
    left: calc(50% - 145px);
    width: 290px;
    min-height: 72px;
  }

  @keyframes line {
    0% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }
</style>
