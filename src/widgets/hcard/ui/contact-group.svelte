<script>
  import { classes } from "~/shared/utils/classes.js";
  import { createBEM } from "~/shared/utils/create-bem.js";
  import {
    LINK_PATTERN,
    EMAIL_PATTERN,
    PHONE_PATTERN,
  } from "~/shared/constants";
  import EmailImg from "~/shared/icons/email-contact.svg";
  import PhoneImg from "~/shared/icons/phone-contact.svg";
  import TextImg from "~/shared/icons/text-contact.svg";

  export let contacts = [];

  const contactImage = (text) => {
    if (EMAIL_PATTERN.test(text)) {
      const mailto = `mailto:${text}`;
      return { src: EmailImg, href: mailto };
    }
    if (PHONE_PATTERN.test(text)) {
      const tel = `tel:${text}`;
      return { src: PhoneImg, href: tel };
    }
    if (LINK_PATTERN.test(text)) {
      const url = new URL(text);
      const urlSrc = `http://www.google.com/s2/favicons?domain=${url.hostname}`;
      return { src: urlSrc, href: text };
    }

    return { src: TextImg, href: "#" };
  };

  $: contactImages = contacts.map((contact) => contactImage(contact));
</script>

<div class="contacts-group">
  {#each contactImages as { src, href }}
    <div class="contact-image">
      <!-- svelte-ignore security-anchor-rel-noreferrer -->
      <a {href} target="_blank">
        <img class="contact-image__content" {src} alt="contact" />
      </a>
    </div>
  {/each}
</div>

<style lang="scss">
  .contacts-group {
    min-width: 20px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
  }

  .contact-image {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    padding: 4px;
    background: #fff;
    &__content {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }
</style>
