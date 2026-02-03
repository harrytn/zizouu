
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';
const forGithubPages = true;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(
			{
				fallback: '404.html',
				pages: 'build',
				assets: 'build',
				precompress: true,
				strict: true
			}
		),
		paths: {
			 base: '/zizouu'
		},
	}

};

export default config;
=======
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
>>>>>>> 971fd1031cb88968c99b00ae9c098814e7c79bca
