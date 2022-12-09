<script>
  import PatternBlock from "~/features/pattern-block.svelte";
  import EmailSvg from "~/shared/icons/email-address.svg";
  import PhoneSvg from "~/shared/icons/phone-number.svg";

  export let inputMethod = "";
  export let placeholderState = "";

  const MENU_ITEMS = [
    {
      theme: "instagram",
      text: "inst",
      placeholder: "nickname",
      icon: "",
    },
    {
      theme: "vkontakte",
      text: "vk",
      placeholder: "vk_id",
      icon: "",
    },
    {
      theme: "telegram",
      text: "tg",
      placeholder: "nickname",
      icon: "",
    },
    {
      theme: "tiktok",
      text: "tiktok",
      placeholder: "nickname",
      icon: "",
    },
    {
      theme: "github",
      text: "github",
      placeholder: "nickname",
      icon: "",
    },
    {
      theme: "phone",
      text: "",
      placeholder: "phone number",
      icon: PhoneSvg,
    },
    {
      theme: "email",
      text: "",
      placeholder: "email address",
      icon: EmailSvg,
    },
  ];
</script>

<div class="items">
  {#each MENU_ITEMS as { icon, text, theme, placeholder }}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="items__item"
      on:click={(e) => {
        inputMethod = theme;
        placeholderState = placeholder;
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
