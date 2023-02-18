<script>
  import BlurBackground from "~/features/blur-layout.svelte";
  import { fade } from "svelte/transition";
</script>

<main class="greeting-page" out:fade={{ duration: 500 }}>
  <section class="greeting-page__background">
    <BlurBackground />
  </section>
  <section class="greeting-page__content-page">
    <slot />
  </section>
</main>

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
</style>
