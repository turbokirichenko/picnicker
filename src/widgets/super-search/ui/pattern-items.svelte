<script>
  import PatternBlock from "~/features/pattern-block.svelte";
  export let inputMethod = "";

  const MENU_ITEMS = [
    {
      theme: "instagram",
      text: "inst",
      icon: "",
    },
    {
      theme: "vkontakte",
      text: "vk",
      icon: "",
    },
    {
      theme: "telegram",
      text: "tg",
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
      text: "phone",
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
  {#each MENU_ITEMS as { icon, text, theme }}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="items__item"
      on:click={(e) => {
        console.log(theme);
        inputMethod = theme;
      }}
    >
      <PatternBlock {icon} {text} {theme} />
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
      max-width: 160px;
      min-width: 80px;
      height: 80px;
    }
  }
</style>
