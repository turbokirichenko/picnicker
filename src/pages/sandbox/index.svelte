<script>
  import { location } from "svelte-spa-router";
  import Hcard from "../../widgets/hcard/hcard.svelte";
  console.log($location);
  let view = false;
  let hash = $location.split("/")[2];
</script>

<div>
  <Hcard {view} {hash} />
</div>
