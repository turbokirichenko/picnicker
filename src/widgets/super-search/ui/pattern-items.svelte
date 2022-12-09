<script>
  import PatternBlock from "~/features/pattern-block.svelte";

  const MENU_ITEMS = [
    {
      theme: "instagram",
      text: "insta",
      icon: "",
    },
    {
      theme: "vkontakte",
      text: "vk",
      icon: "",
    },
    {
      theme: "telegram",
      text: "tm",
      icon: "",
    },
    {
      theme: "tiktok",
      text: "tiktok",
      icon: "",
    },
    {
      theme: "github",
      text: "github",
      icon: "",
    },
    {
      theme: "phone",
      text: "phone number",
      icon: "",
    },
    {
      theme: "email",
      text: "email",
      icon: "",
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
      min-width: 80px;
      height: 80px;
    }
  }
</style>
