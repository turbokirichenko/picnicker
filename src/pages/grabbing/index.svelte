<script>
  import { onMount } from "svelte";
  import { querystring } from "svelte-spa-router";
  import searcher from "~/entities/searcher";
  import TEMPLATE_SITES from "~/shared/template_sites.json";

  const state = {
    username: "",
    template_url: "",
    loading: true,
    data: [],
    error: "",
  };

  const presentBlock = {
    username: "",
    favicon: "",
    template_url: "",
    image_url: "",
  };

  const slideBlockTemplate = {
    good: true,
    prob: "",
    lang: "",
    link: "",
    title: "",
    description: "",
    image_url: "",
  };

  let slides = [];
  const getOGraphParams = (data) => {
    const ogData = {
      title: "",
      description: "",
      image: "",
    };

    if ("ogTitle" in data || "twitterTitle" in data) {
      ogData.title = data.ogTitle || data.twitterTitle;
    }

    if ("ogDescription" in data || "twitterDescription" in data) {
      ogData.description = data.ogDescription || data.ogDescription;
    }

    if ("ogImage" in data) {
      let image = Array.isArray(data.ogImage) ? data.ogImage[0] : data.ogImage;
      ogData.image = image.url;
    }

    return ogData;
  };
  const buildingSlides = (data) => {
    const slidesArr = data.map((item) => {
      let slideBlock = {};
      if (item.found) {
        slideBlock.good = true;
        slideBlock.link = item.link;
        slideBlock.lang = item.language;
        slideBlock.prob = item.rate;
        const { title, description, image } = getOGraphParams(item.open_graph);
        slideBlock.title = title;
        slideBlock.description = description;
        slideBlock.image = image;
      }
      return slideBlock;
    });
    return slidesArr.filter((item) => Object.keys(item).length);
  };

  onMount(() => {
    const opts = new URLSearchParams($querystring);

    const username = opts.get("username");
    if (username) {
      state.username = username;
    }

    const template = opts.get("template");
    if (template && TEMPLATE_SITES[template]) {
      state.template_url = TEMPLATE_SITES[template].link;
    }

    searcher
      .useUsernameInfo(state.username, state.template_url)
      .then((response) => {
        const { data } = response;
        if (!data) throw new Error("Connection reffused!");
        state.data = data.data;
        state.loading = false;
      })
      .catch((err) => {
        state.error = err.message;
        state.loading = false;
      });
  });

  $: slides = buildingSlides(state.data);
</script>

<div class="grabing-page">
  {#if state.loading}
    <div class="loading-theme">
      <div class="loading-theme__icon" />
    </div>
  {:else}
    <div class="profile-layout">
      <div class="profile-layout__frame">
        <div class="username-info">
          <div class="username-info__header">
            <div class="username-heading">
              <div class="username-heading__username" />
              <div class="username-heading__url" />
              <div class="username-heading__image" />
            </div>
          </div>
          <div class="username-info__content">
            <div class="slides">
              {#each slides as slide}
                <div class="slides__item">
                  <div class="slide">
                    <div class="slide__link">{slide.link}</div>
                    <div class="slide__lang">{slide.lang}</div>
                    <div class="slide__title">{slide.title}</div>
                    <div class="slide__description">{slide.description}</div>
                    <div class="slide__image">
                      <img src={slide.image} alt="" />
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  .grabing-page {
    width: 100%;
  }
  .loading-theme {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: coral;
    &__icon {
      width: 50px;
      height: 50px;
      background-color: brown;
      animation-name: loading;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      border-radius: 10px;
    }
  }

  .slides {
    width: 100%;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: brown;
    &__item {
      padding: 20px;
      background-color: #f9f9f980;
      border-radius: 20px;
    }
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
