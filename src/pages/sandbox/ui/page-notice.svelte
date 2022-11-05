<script>
  import Bar from "~/features/menu-element/index.svelte";
  export let noticeText;
</script>

<div class="animation">
  <Bar>
    <div class="notice">
      <span class="notice__text">{noticeText}</span>
    </div>
  </Bar>
</div>

<style lang="scss">
  .animation {
    animation-name: notice-raise;
    animation-duration: 3s;
    opacity: 0;
    pointer-events: none;
  }
  .notice {
    display: block;
    padding: 5px 12px;
    text-align: center;

    &__text {
      font-size: 16px;
      line-height: 18px;
      font-weight: 700;
    }
  }

  @keyframes notice-raise {
    0% {
      transform: translate(0%, 100%);
      opacity: 0;
    }
    20% {
      transform: translate(0%, 0%);
      opacity: 1;
    }
    90% {
      transform: translate(0%, 0%);
      opacity: 1;
    }
    100% {
      transform: translate(0%, 100%);
      opacity: 0;
    }
  }
</style>
