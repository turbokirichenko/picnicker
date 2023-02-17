<script>
  import { onMount } from "svelte";
  import { querystring, pop } from "svelte-spa-router";
  import { classes } from "~/shared/utils/classes";
  import SaveSvg from "~/shared/icons/save.svg";
  import ArrowSvg from "~/shared/icons/bx-right-arrow.svg";
  import AnimateLayout from "~/widgets/animate-layout/index.svelte";
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
  const filterSlide = (slide) => {
    if (!Object.keys(slide).length) return false;
    if (!slide.good) return false;
    const deniedRequest =
      /(Request denied)|(404 Not Found)|(Page Not Found)|(Telegram – a new era of messaging)|(Join group chat on Telegram)/;
    if (slide.title && slide.title.match(deniedRequest)) {
      return false;
    }
    const badLink = /(facebook.com)|(mobile.twitter.com)/;
    if (slide.link && slide.link.match(badLink)) {
      return false;
    }
    const pinterest = /(pinterest.com)/;
    if (slide.link && slide.link.match(pinterest) && !slide.title) {
      return false;
    }
    return true;
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
    return slidesArr.filter((item) => filterSlide(item));
  };

  onMount(() => {
    const opts = new URLSearchParams($querystring);

    const username = opts.get("username");
    if (username) {
      state.username = username;
    }

    const template = opts.get("template");
    if (template && TEMPLATE_SITES[template]) {
      state.template_url = TEMPLATE_SITES[template].link.replace(
        "{username}",
        state.username
      );
    }

    searcher
      .useUsernameInfo(state.username, state.template_url)
      .then((response) => {
        const { data } = response;
        if (!data) throw new Error("Connection reffused!");
        console.log(response);
        state.data = data.data;
        state.loading = false;
      })
      .catch((err) => {
        state.error = err.message;
        state.loading = false;
      });
  });

  $: slides = buildingSlides(state.data);

  //get random layer
  const getRandomLayer = () => {
    const min = 1;
    const max = 4;
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  };
</script>

<div class="grabing-page">
  <AnimateLayout view={false} layer={getRandomLayer()}>
    {#if state.loading}
      <div class="loading-theme">
        <div class="loading-theme__icon" />
      </div>
    {:else}
      <div class="profile-layout">
        <div class="profile-layout__header">
          <header class="grabb-header">
            <div class="grabb-header__back-toggle">
              <button
                class="image-toggle"
                on:click={(e) => {
                  pop();
                }}
              >
                <img
                  class="image-toggle__image"
                  src={ArrowSvg}
                  alt="toggle content"
                />
              </button>
            </div>
            <div class="grabb-header__save-toggle">
              <button class="image-toggle">
                <img
                  class="image-toggle__image"
                  src={SaveSvg}
                  alt="toggle content"
                />
              </button>
            </div>
          </header>
        </div>
        <div class="profile-layout__frame">
          <div class="username-info">
            <div class="username-info__header" />
            <div class="username-info__content">
              <div class="slides">
                {#each slides as slide}
                  <div class="slides__item">
                    <div class="slide">
                      <div
                        class={classes(
                          "slide__link",
                          "slide__infoblock",
                          `slide__infoblock${!slide.link && "-empty"}`
                        )}
                      >
                        <a href={slide.link}>{slide.link}</a>
                      </div>
                      <div
                        class={classes(
                          "slide__lang",
                          "slide__infoblock",
                          `slide__infoblock${!slide.lang && "-empty"}`
                        )}
                      >
                        {slide.lang}
                      </div>
                      <div
                        class={classes(
                          "slide__title",
                          "slide__infoblock",
                          `slide__infoblock${!slide.title && "-empty"}`
                        )}
                      >
                        {slide.title}
                      </div>
                      <div
                        class={classes(
                          "slide__description",
                          "slide__infoblock",
                          `slide__infoblock${!slide.description && "-empty"}`
                        )}
                      >
                        {slide.description}
                      </div>
                      <div class="slide__image">
                        <img class="raped-image" src={slide.image} alt="" />
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
  </AnimateLayout>
</div>

<style lang="scss">
  .grabing-page {
    width: 100%;
    min-height: 100vh;
  }
  .loading-theme {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &__icon {
      width: 50px;
      height: 50px;
      background-color: #f9f9f9;
      animation-name: loading;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      border-radius: 10px;
    }
  }

  .profile-layout {
    width: 100%;
    max-width: 520px;
    margin: auto;
    height: auto;
    animation-name: arrived;
    animation-duration: 2.2s;
    padding: 20px;

    &__header {
      width: 100%;
      height: 60px;
      margin-bottom: 40px;
    }
  }

  .grabb-header {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    &__back-toggle,
    &__save-toggle {
      height: 100%;
      aspect-ratio: 1/1;
    }
  }

  .username-info {
    &__header {
      margin-bottom: 20px;
    }
  }

  .image-toggle {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    padding: 15px;
    margin: 0;
    border: 2px solid #fff;
    background: none;
    &:focus {
      outline: none;
    }

    &__image {
      display: block;
      width: 100%;
    }
  }

  .slides {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    &__item {
      width: 100%;
    }
  }

  .slide {
    width: 100%;
    padding: 20px;
    background-color: #f9f9f980;
    border-radius: 20px;

    &__infoblock {
      max-width: 100%;
      display: inline-block;
      padding: 2px 15px;
      border-radius: 15px;
      font-size: 16px;
      font-family: Comfortaa;
      line-height: 24px;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #98329f;

      &-empty {
        display: none;
      }
    }

    &__link {
      background-color: #f9f9f9;
      color: #98329f;
    }
    &__lang {
      background-color: #98329f;
      color: #f9f9f9;
    }
    &__title {
      color: #98329f;
      border: solid 2px #98329f;
    }
    &__description {
      padding: 2px 0;
      color: #98329f;
    }
    &__image {
      padding: 20px 0;
    }
  }

  .raped-image {
    display: block;
    width: 100%;
    max-width: 360px;
    margin: auto;
    border-radius: 15px;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes arrived {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
