<script>
  let loading = true;
</script>

<div class="grabing-page">
  {#if loading}
    <div class="grabing-page__loading-theme">
      <div class="loading-layout">loading</div>
    </div>
  {:else}
    <div class="grabing-page__profile">
      <div class="user-profile">
        <div class="user-profile__header">header</div>
        <div class="user-profile__contacts">items</div>
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
</style>
