<script>
  import SetInformation from "./set-information.svelte";
</script>

<div class="loop-set-information">
  <SetInformation />
  <SetInformation />
</div>

<style lang="scss">
  .loop-set-information {
    width: 2200px;
    display: flex;
    flex-direction: row;
    position: relative;
    height: 100%;

    animation-name: loop;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes loop {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-1100px);
    }
  }
</style>
