<script>
  import PatternBlock from "~/features/pattern-block.svelte";
  import EarthSvg from "~/shared/icons/earth-grid.svg";
  import PictureSvg from "~/shared/icons/picture.svg";
  import PhotoSvg from "~/shared/icons/photo-camera.svg";
  import AddUserSvg from "~/shared/icons/add-user.svg";

  const MENU_ITEMS = [
    {
      icon: PhotoSvg,
      text: "photo",
    },
    {
      icon: PictureSvg,
      text: "gallery",
    },
    {
      icon: AddUserSvg,
      text: "import contact",
    },
    {
      icon: EarthSvg,
      text: "voice",
    },
  ];
</script>

<div class="items">
  {#each MENU_ITEMS as { icon, text }}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="items__item" on:click={(e) => {}}>
      <PatternBlock {icon} {text} />
    </div>
  {/each}
</div>

<style lang="scss">
  .items {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
    animation-name: entry;
    animation-duration: 0.1s;
    animation-fill-mode: forwards;

    &__item {
      flex: 1 1 0px;
      max-width: 100%;
      min-width: 280px;
      height: 80px;
    }
  }

  @keyframes entry {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
