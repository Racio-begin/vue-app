import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [
			vue(),
			vueJsx(),
			vueDevTools(),
		],
		base: env.VITE_BASE || '/',
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "@/assets/styles/global" as *;\n`
				}
			}
		}
	};
});
