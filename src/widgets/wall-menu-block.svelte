<script>
  import WallLayout from "~/features/wall-layout.svelte";
  import CircleBlock from "~/features/circle-block.svelte";
  import LoopSetInformation from "~/features/loop-set-information/index.svelte";
</script>

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
            color="red"
          />
        </div>
        <div class="stepnstep__block-2">
          <CircleBlock
            title="STEP 2"
            text="creating QR and take a screenshot!"
            bg={true}
            color="yellow"
          />
        </div>
        <div class="stepnstep__block-3">
          <CircleBlock
            title="STEP 3"
            text="Share with anything and anywhere you want!"
            bg={true}
            color="violet"
          />
        </div>
      </div>
    </div>
    <div class="wall-content__block-4">
      <div class="contacts">
        <span class="contact-text"
          >created by <a
            class="contact-text__link"
            href="https://github.com/turbokirichenko">@turbokirichenko</a
          ></span
        >
      </div>
    </div>
  </div>
</WallLayout>

<style lang="scss">
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
      background-color: #f77eff;
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
