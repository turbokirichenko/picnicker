<script>
  export let searched = "";
  export let placeholder = "phone | email | link";
</script>

<input class="bar-input" bind:value={searched} {placeholder} />

<style lang="scss">
  .bar-input {
    background: none;
    border: none;
    width: 100%;
    height: 100%;
    padding: 0;
    font-size: 21px;
    color: #f9f9f9;
    border-radius: 1000px;
    padding: 0 15px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-size: 18px;
      color: #f9f9f980;
    }
  }
</style>
