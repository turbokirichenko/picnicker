<script>
  import hello from "~/shared/assets/hello-emoji.svg";
  import qr from "~/shared/assets/qr-click.svg";
  import girl from "~/shared/assets/girl.svg";
  import cat from "~/shared/assets/cat.svg";
</script>

<div class="set-information">
  <div class="set-information__block-1 set-information__child">
    <div class="info-block info-block-max">
      <img src={hello} alt="hello" class="info-block__img" />
      <p class="info-block__text">
        create mini business card and share it by QR code!
      </p>
    </div>
  </div>
  <div class="set-information__block-2 set-information__child">
    <div class="info-block info-block-mini">
      <img src={girl} alt="girl" class="info-block__img" />
    </div>
  </div>
  <div class="set-information__block-3 set-information__child">
    <div class="info-block info-block-medi">
      <img id="qr" src={qr} alt="qr" class="info-block__img" />
      <p class="info-block__text">Share your contact with unique design!</p>
    </div>
  </div>
  <div class="set-information__block-4 set-information__child">
    <div class="info-block info-block-max">
      <img src={cat} alt="cat" class="info-block__img" />
      <p class="info-block__text">For business and networking</p>
    </div>
  </div>
</div>

<style lang="scss">
  .set-information {
    width: 1100px;
    height: 100%;

    display: block;
    position: relative;
    top: 0;
    left: 0;

    &__child {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      padding: 0;
      margin: 0;
      border-radius: 50%;
    }
    &__block-1 {
      top: 40px;
      left: 0;
      width: 320px;
      height: 320px;
      background-color: #d93d04;
    }
    &__block-2 {
      bottom: 0px;
      left: 360px;
      width: 120px;
      height: 120px;
      background-color: #262626;
    }

    &__block-3 {
      top: 0px;
      left: 390px;
      width: 260px;
      height: 260px;
      background-color: blueviolet;
    }

    &__block-4 {
      bottom: 30px;
      left: 720px;
      width: 320px;
      height: 320px;
      background-color: #ffcc00;
    }
  }

  #qr {
    filter: invert(1);
  }

  .info-block {
    width: 50%;
    font-size: 24px;
    color: white;
    text-align: center;

    &__img {
      width: 48px;
      height: 48px;
    }

    &__text {
      margin: 0;
      margin-top: 15px;
    }
  }
</style>
