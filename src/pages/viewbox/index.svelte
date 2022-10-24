<script>
  import { location } from "svelte-spa-router";
  import Hcard from "../../widgets/hcard/hcard.svelte";
  let view = true;
  let hash = $location.split("/")[2];
</script>

<div>
  <Hcard {view} {hash} />
</div>
