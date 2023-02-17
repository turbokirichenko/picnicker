import { writable } from "svelte/store";

const pageStateTemplate = {
    theme: true,
    elapsed: true,
}

export const state = writable(pageStateTemplate);