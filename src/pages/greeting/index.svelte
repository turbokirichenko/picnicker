<script>
  import BlurLayout from "~/features/blur-layout.svelte";
  import WallLayout from "~/features/wall-layout.svelte";
  import ArrowRightSvg from "~/shared/icons/arrow-right.svg";
</script>

<main class="greeting-page">
  <div class="greeting-page__fixed-item">
    <BlurLayout>
      <div class="description-block">
        <div class="description-block__header">
          <div>eadadwd</div>
        </div>
        <div class="description-block__content">
          <div class="prologue-block">
            <div class="prologue-block__heading">
              <div class="big-title-block">
                <h1 class="big-title-block__text">GRABLEE.ME</h1>
              </div>
            </div>
            <div class="prologue-block__item">
              <div class="spantext-block">
                <span class="spantext-block__text"
                  >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos</span
                >
              </div>
            </div>
            <div class="prologue-block__toggle">
              <div class="arrow-button">
                <div class="arrow-button__content">
                  <h1 class="medium-title">LET'S START</h1>
                </div>
                <div class="arrow-button__arrow">
                  <img class="arrow-img" src={ArrowRightSvg} alt="next" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="description-block__footer">
          <h3>about project</h3>
        </div>
      </div>
    </BlurLayout>
  </div>
  <div class="greeting-page__floated-item">
    <WallLayout>
      <div class="wall-content">
        <div>dawdad</div>
      </div>
    </WallLayout>
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
      min-height: 101vh;
      height: 101vh;
      //z-index: -1;
      overflow: hidden;
    }

    &__floated-item {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      min-height: 400px;
      margin-top: 100vh;
      overflow: hidden;
    }
  }

  .description-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    &__header {
      width: 100%;
      height: 80px;
    }
    &__content {
      width: 100%;
      max-width: 360px;
      min-height: 480px;
      padding: 20px;
    }
    &__footer {
      height: 80px;
    }
  }

  .prologue-block {
    width: 100%;
    height: 100%;
    color: #f9f9f9;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 40px;
    &__heading {
      width: 100%;
      min-height: 60px;
    }
    &__item {
      width: 100%;
      min-height: 120px;
    }
    &__toggle {
      width: 100%;
      height: 80px;
      padding: 0 10px;
    }
  }

  .big-title-block {
    &__text {
      margin: 0;
      padding: 0;
      font-size: 3.6em;
      text-align: center;
    }
  }

  .medium-title {
    margin: 0;
    padding: 0;
    font-size: 32px;
    text-align: center;
    line-height: 48px;
  }

  .spantext-block {
    text-align: center;
    &__text {
      font-family: Comfortaa;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
    }
  }

  .arrow-button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    border: 2px solid #f9f9f9;
    border-radius: 40px;
    padding: 0 10%;
    &__content {
      height: 48px;
    }
    &__arrow {
      width: 48px;
      height: 48px;
      transition: transform 0.5s;
      transform: translate(0, 0);
    }

    &:hover {
      .arrow-button__arrow {
        transform: translate(15px, 0);
      }
    }
  }

  .arrow-img {
    display: block;
    width: 100%;
    filter: invert(1);
  }

  .wall-content {
    width: 100%;
    height: 100%;
    background-color: #f9f9f9;
    border-radius: 30px;
  }
</style>
