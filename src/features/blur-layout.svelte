<script>
  import { classes } from "~/shared/utils/classes";
</script>

<div class="blur-animated-block">
  <div
    class={classes(
      "blur-animated-block__item",
      "blur-animated-block__item-big",
      "blur-animated-block__item-1"
    )}
  />
  <div
    class={classes(
      "blur-animated-block__item",
      "blur-animated-block__item-medium",
      "blur-animated-block__item-2"
    )}
  />
  <div
    class={classes(
      "blur-animated-block__item",
      "blur-animated-block__item-medium",
      "blur-animated-block__item-3"
    )}
  />
  <div
    class={classes(
      "blur-animated-block__item",
      "blur-animated-block__item-tiny",
      "blur-animated-block__item-4"
    )}
  />
  <div
    class={classes(
      "blur-animated-block__item",
      "blur-animated-block__item-tiny",
      "blur-animated-block__item-5"
    )}
  />
</div>

<style lang="scss">
  .blur-animated-block {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #2e302f;
    top: 0;
    left: 0;
    z-index: -1;

    &__item {
      position: absolute;
      background-color: #f9f9f9;
      display: block;
      border-radius: 50%;
      animation-name: rotate;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      filter: blur(10px);

      &-1 {
        top: 10%;
        left: 20%;
        animation-delay: -2s;
        animation-direction: reverse;
        animation-duration: 40s;
      }

      &-2 {
        bottom: 10%;
        right: 0%;
        animation-delay: -4s;
        animation-duration: 25s;
      }

      &-5 {
        top: 70%;
        left: 35%;
        animation-delay: -10s;
        animation-duration: 20s;
      }

      &-4 {
        top: 20%;
        right: 5%;
        animation-delay: -8s;
        animation-direction: reverse;
        animation-duration: 30s;
      }

      &-3 {
        bottom: 50%;
        right: -5%;
        animation-delay: -6s;
        animation-duration: 15s;
      }

      &-big {
        width: 20vmax;
        height: 20vmax;
      }

      &-medium {
        width: 18vmax;
        height: 18vmax;
      }

      &-tiny {
        width: 14vmax;
        height: 14vmax;
      }
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate(100%, 0);
      filter: blur(10px) opacity(1);
    }

    50% {
      transform: rotate(180deg) translate(100%, 0) scale(0.7);
      filter: blur(20px) opacity(0.5);
    }

    100% {
      transform: rotate(360deg) translate(100%, 0);
      filter: blur(10px) opacity(1);
    }
  }
</style>
