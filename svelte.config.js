import sveltePreprocess from 'svelte-preprocess'
import * as sass from 'sass'
import adapter from '@sveltejs/adapter-static';

export default {
  preprocess: sveltePreprocess({
    sass: {
      sync: true,
      implementation: sass,
    },
  }),
  kit: {
    target: '#app',
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    })
  }
}