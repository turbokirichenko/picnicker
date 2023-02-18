import instagram from "~/shared/icons/share/instagram.svg";
import vkontakte from "~/shared/icons/share/vk.svg";
import telegram from "~/shared/icons/share/telegram.svg";
import phone from "~/shared/icons/share/phone.svg";
import email from "~/shared/icons/share/email.svg";

export const ICONS = [
    { icon: instagram,
    placeholder: "@your_name",
    src: "https://instagram.com/{@your}"
},
{
    icon: vkontakte,
    placeholder: "@your_name",
    src: "https://vk.com/{@your}"
},
{
    icon: telegram,
    placeholder: "@your_name",
    src: "https://t.me/{@your}"
},
{
    icon: phone,
    placeholder: "+phone-number",
    src: "tel:{@your}"
},
{
    icon: email,
    placeholder: "email@address",
    src: "mailto:{@your}"
}
]

export const COLORS = [
    "extra-yellow",
    "chili-papper",
    "space-rocket"
]