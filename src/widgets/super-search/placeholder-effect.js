export const placeholderEffect = () => {
    let placeholder = "";
    const variables = ["+7(999)1231212", "https://contact-link.ru", "contact@email.ru", "vk: someId"];
    let currentExample = 0;
    while (1) {
        const len = variables[currentExample].length;
        let enter = true;
        let iter = 0;
        const intervalID = setInterval(() => {
            placeholder = variables[currentExample].substr(0, iter);
            if (iter === len) {
                enter = false;
            }
            if (!iter && !enter) {
                clearInterval(intervalID);
            }
        }, 30);
    }
}