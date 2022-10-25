<script>
  import Page from "~/widgets/page/index.svelte";

  let view = false;
  let layer = Number(0);
</script>

<Page {view} bind:layer />

<style lang="scss">
</style>
