<script>
  import arrowRight from "~/shared/icons/arrow-right.svg";
  import { link } from "svelte-spa-router";
  import { fade } from "svelte/transition";
</script>

<div class="fade-block">
  <h1 class="fade-block__title" in:fade={{ delay: 0, duration: 2000 }}>
    <span class="wall-text"><b class="wall-text__aczhent">PIC</b>NICKER</span>
  </h1>
  <p class="fade-block__text" in:fade={{ delay: 2000, duration: 2000 }}>
    <span class="sub-text"
      >Offline tool to create your own mini business card!</span
    >
  </p>
  <p class="fade-block__text" in:fade={{ delay: 4000, duration: 2000 }}>
    <a class="geolink" href="/sandbox" use:link>
      Let's start! <img
        class="geolink__img"
        src={arrowRight}
        alt="right arrow"
      />
    </a>
  </p>
</div>

<style lang="scss">
  .fade-block {
    height: 100%;
    color: white;
    font-size: 28px;
    text-align: center;
    padding: 5px 12px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &__title {
      width: 100%;
      text-align: center;
      font-size: 3em;
      margin: 20px 0;
    }

    &__text {
      font-size: 3rem;
      padding: 0 3%;
      margin: 20px 0;
    }
  }

  .wall-text {
    font-size: 7rem;
    &__aczhent {
      color: #d93d04;
      font-size: 1.1em;
    }
  }

  .sub-text {
    font-size: 2.1rem;
    font-weight: 100;
  }

  .geolink {
    display: block;
    padding: 10px 16px;
    border: 2px solid white;
    border-radius: 120px;
    color: white;
    font-size: 2.5rem;
    line-height: 3rem;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 100;
    transition: gap 0.5s;

    &:hover {
      gap: 30px;
    }

    &__img {
      height: 2.5rem;
      filter: invert(1);
    }
  }

  @media (max-width: 720px) {
    .wall-text {
      font-size: 4rem;
    }

    .sub-text {
      font-size: 1.5rem;
    }

    .geolink {
      font-size: 1.8rem;
      line-height: 2rem;
    }
  }
</style>
