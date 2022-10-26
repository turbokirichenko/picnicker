<script>
  import { location } from "svelte-spa-router";
  import { encodeBase64, decodeBase64 } from "~/shared/utils/base64";
  import Hcard from "~/widgets/hcard/index.svelte";
  import Layout from "~/widgets/layout/index.svelte";
  export let view = false;

  const objectKeys = ["dark", "color", "bio", "contacts"];
  const createStateObject = (data = {}, v = "0") => {
    try {
      if (!data) throw new Error("data is undefined!");
      const gateway = objectKeys.map((key) => {
        if (key in data) return data[key];
        throw new Error("something went wrong!");
      });
      // { v: "version", d: [] } //dataobject format
      const dataObject = JSON.stringify({ v, d: gateway });
      console.log(dataObject);
      return encodeBase64(dataObject);
    } catch (err) {
      console.log(err.message);
    }
  };
  const decodeStateObject = (hash) => {
    try {
      if (!hash) throw new Error("hash is empty!");
      const { v, d } = JSON.parse(decodeBase64(hash));
      // { v: "version", d: [] } //dataobject format
      let data = {};
      objectKeys.map((key, i) => {
        data[key] = d[i];
      });
      return [v, data];
    } catch (err) {
      return ["0", {}];
    }
  };

  let locationStr = $location.split("/")[2];
  const [hash, layerNum] = locationStr?.split(".");
  const [v, dataHook] = decodeStateObject(hash);

  let layer = Number(layerNum) || 0;
  $: data = { ...dataHook, ...data };
  $: console.log(createStateObject(data));
  $: console.log(layer);
</script>

<div class="page">
  <Layout {view} bind:layer />
  <Hcard {view} bind:data />
</div>

<style lang="scss">
  .page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    gap: 30px;
  }
</style>
