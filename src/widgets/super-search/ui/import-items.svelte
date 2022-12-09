<script>
  import PatternBlock from "~/features/pattern-block.svelte";

  const MENU_ITEMS = [
    {
      icon: "",
      text: "photo",
    },
    {
      icon: "",
      text: "gallery",
    },
    {
      icon: "",
      text: "import contact",
    },
    {
      icon: "",
      text: "voice",
    },
  ];
</script>

<div class="items">
  {#each MENU_ITEMS as { icon, text }}
    <div class="items__item">
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

    &__item {
      flex: 1 1 0px;
      max-width: 100%;
      min-width: 280px;
      height: 80px;
    }
  }
</style>
