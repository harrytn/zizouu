import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';
const forGithubPages = true;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html'   // IMPORTANT for GitHub Pages
    }),
		paths: {
			base: forGithubPages ? '/zizouu' : ''
		},
	}

};

export default config;
