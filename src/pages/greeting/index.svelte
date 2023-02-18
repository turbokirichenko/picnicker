<script>
  import { fade } from "svelte/transition";
  import FadeMenuBlock from "~/widgets/fade-menu-block.svelte";
  import WallMenuBlock from "~/widgets/wall-menu-block.svelte";

  let themeDark = true;
  let changeTheme = (e) => {
    themeDark = !themeDark;
  };
  let elapsedSearch = true;

  let allowClick = false;
  let onDbClick = (fn) => (e) => {
    if (allowClick) {
      fn(e);
      return;
    }
    allowClick = true;
    setTimeout(() => {
      allowClick = false;
    }, 200);
  };
</script>

<div transition:fade={{ duration: 1000 }} class="page-internal-content">
  <div class="page-internal-content__fixed-item">
    <FadeMenuBlock />
  </div>
  <div class="page-internal-content__float-item">
    <WallMenuBlock />
  </div>
</div>

<style lang="scss">
  .greeting-page {
    width: 100%;
    min-height: 720px;
    height: 100vh;
    position: relative;

    &__background {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      overflow: hidden;
    }
  }

  .page-internal-content {
    &__fixed-item {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      overflow: hidden;
    }

    &__float-item {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 2350px;
      overflow: hidden;
    }
  }
</style>
