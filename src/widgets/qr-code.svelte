<script>
  import QRcodeSVG from "~/shared/utils/qr-code-svg";
  import { FULL_SHOW_PATH } from "~/shared/constants";
  import Bar from "~/features/menu-element/index.svelte";

  export let hash = "";
  export let clicked = false;

  const createQRcode = (refer) => {
    try {
      const qr = new QRcodeSVG({
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

  const createSvgUrl = (refer) => {
    const svgPrefix = "data:image/svg+xml;base64,";
    const svgStr = createQRcode(refer);
    const base64data = window.btoa(svgStr);
    return `${svgPrefix}${base64data}`;
  };

  const createLink = (path, hash) => {
    if (!path || !hash) return "/";
    return `${path}${hash}`;
  };

  const onClicked = () => {
    if (clicked) return;
    clicked = true;
    const timerMs = 5000;
    setTimeout(() => {
      clicked = false;
    }, timerMs);
  };

  $: link = createLink(FULL_SHOW_PATH, hash);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<Bar>
  <div class="qr-show" on:click={onClicked}>
    <img class="qr-show__image" alt="qr code" src={createSvgUrl(link)} />
  </div>
</Bar>

<style lang="scss">
  .qr-show {
    width: 100%;
    height: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    &__image {
      display: block;
      width: 100%;
      height: 100%;
      padding: 30px;
      border-radius: 20px;
      background-color: #f4f4f4;
    }
  }
</style>
