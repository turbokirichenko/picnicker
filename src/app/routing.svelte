<script>
  import Router from "svelte-spa-router";
  import Greeting from "../pages/greeting/index.svelte";
  import Gateway from "../pages/gateway/index.svelte";
  import Sandbox from "../pages/sandbox/index.svelte";
  import Viewbox from "../pages/viewbox/index.svelte";
  import NotFound from "../pages/not-found.svelte";

  const routingMap = {
    "/": Greeting,
    "/gateway": Gateway,
    "/sandbox": Sandbox,
    "/sandbox/*": Sandbox,
    "/viewbox": Viewbox,
    "/viewbox/*": Viewbox,
    "*": NotFound,
  };
</script>

<Router routes={routingMap} />
