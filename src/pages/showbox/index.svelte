<script>
  import { fade } from "svelte/transition";
  import { parse } from "regexparam";
  import { location } from "svelte-spa-router";
  import { parseParams } from "~/shared/utils/parse-params";
  import { cardModule } from "~/entities/card";
  import AnimateLayout from "~/widgets/animate-layout/index.svelte";
  import Hcard from "~/widgets/hcard/index.svelte";
  import PhoneSimulation from "~/widgets/phone-simulation.svelte";

  const viewMode = true;
  const pattern = parse("/:hashed");
  const params = parseParams($location, pattern);
  const hash = params.hashed;
  //try to get data of hcard
  const [layerID, showData] = cardModule.decodeDataSnap(hash);
</script>

<div transition:fade={{ duration: 1000 }} class="place">
  <PhoneSimulation>
    <AnimateLayout view={viewMode} layer={layerID}>
      <div class="hcard-wrapper">
        <Hcard view={viewMode} data={showData} />
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

  .hcard-wrapper {
    position: absolute;
    top: calc(50% - 145px);
    left: calc(50% - 145px);
    width: 290px;
    height: 290px;
  }
</style>
