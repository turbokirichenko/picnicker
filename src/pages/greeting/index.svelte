<script>
  import { fade } from "svelte/transition";
  import { link } from "svelte-spa-router";
  import BlurBackground from "~/features/blur-layout.svelte";
  import CircleBlock from "~/features/circle-block.svelte";
  import FadeMenuBlock from "~/widgets/fade-menu-block.svelte";
  import LoopSetInformation from "~/widgets/loop-set-information/index.svelte";
  import WallLayout from "~/features/wall-layout.svelte";

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

<main class="greeting-page" out:fade={{ duration: 500 }}>
  <section class="greeting-page__background">
    <BlurBackground />
  </section>
  <section class="greeting-page__content-page">
    <div class="page-internal-content">
      <div class="page-internal-content__fixed-item">
        <FadeMenuBlock />
      </div>
      <div class="page-internal-content__float-item">
        <WallLayout>
          <div class="wall-content">
            <div class="wall-content__block-1">
              <LoopSetInformation />
            </div>
            <div class="wall-content__block-2">
              <div class="main-circle">
                <CircleBlock
                  title="HCARD philosophy"
                  text="make a card in five seconds, and save it as.vcf file"
                />
              </div>
            </div>
            <div class="wall-content__block-3">
              <div class="stepnstep">
                <div class="stepnstep__block-1">
                  <CircleBlock
                    title="STEP 1"
                    text="choice contact pattern, enter information about yourself"
                    bg={true}
                  />
                </div>
                <div class="stepnstep__block-2">
                  <CircleBlock
                    title="STEP 2"
                    text="creating QR and take a screenshot!"
                    bg={true}
                  />
                </div>
                <div class="stepnstep__block-3">
                  <CircleBlock
                    title="STEP 3"
                    text="Share with anything and anywhere you want!"
                    bg={true}
                  />
                </div>
              </div>
            </div>
            <div class="wall-content__block-4">
              <div class="contacts">
                <span class="contact-text"
                  >created by <a
                    class="contact-text__link"
                    href="https://github.com/turbokirichenko"
                    >@turbokirichenko</a
                  ></span
                >
              </div>
            </div>
          </div>
        </WallLayout>
      </div>
    </div>
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

  .wall-content {
    width: 100%;
    height: calc(100% - 20px);
    background-color: #f9f9f9;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    &__block-1 {
      position: relative;
      height: 560px;
      padding-top: 80px;
      margin-bottom: 20px;
    }

    &__block-2 {
      width: 100%;
      padding: 40px 0;
      height: 560px;
      position: relative;
      top: 0;
      left: 0;
    }

    &__block-3 {
      width: 100%;
      padding: 40px 0;
      height: 1200px;
      position: relative;
      top: 0;
      left: 0;
    }

    &__block-4 {
      width: 100%;
      padding: 20px;
      height: 160px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      background-color: blueviolet;
    }
  }
  .main-circle {
    position: absolute;
    width: 480px;
    height: 480px;
    top: calc(50% - 240px);
    left: calc(50% - 240px);
  }

  .stepnstep {
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    &__block-1 {
      position: absolute;
      width: 480px;
      height: 480px;
      top: calc(0);
      left: calc(50% - 240px);
    }
    &__block-2 {
      position: absolute;
      width: 480px;
      height: 480px;
      top: 320px;
      left: calc(50% - 240px);
    }
    &__block-3 {
      position: absolute;
      width: 480px;
      height: 480px;
      top: 640px;
      left: calc(50% - 240px);
    }
  }

  .contact-text {
    font-size: 19px;
    text-align: center;
    color: white;

    &__link {
      color: yellow;
    }
  }
</style>
