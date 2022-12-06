<script>
  import BlurLayout from "~/features/blur-layout.svelte";
</script>

<main class="greeting-page">
  <div class="greeting-page__fixed-item">
    <BlurLayout>
      <div>
        <h1>Hello World!</h1>
      </div>
    </BlurLayout>
  </div>
  <div class="greeting-page__floated-item">
    <div class="internal-block" />
  </div>
</main>

<style lang="scss">
  .greeting-page {
    width: 100%;
    min-height: 100vh;
    position: relative;

    &__fixed-item {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 101vh;
      z-index: -1;
      overflow: hidden;
    }

    &__floated-item {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      min-height: 400px;
      margin-top: 100vh;
      padding-top: 80px;

      overflow: hidden;
    }
  }

  .internal-block {
    width: 100%;
    height: 100%;
    background-color: mediumpurple;
  }
</style>
