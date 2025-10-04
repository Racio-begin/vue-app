import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default defineConfig(({ mode }) => {
	const baseConfig = viteConfig({ mode });

	return mergeConfig(
		baseConfig,
		defineConfig({
			test: {
				globals: true,
				environment: 'jsdom', // Для тестирования Vue-компонентов с DOM
				exclude: ['**/node_modules/**', '**/dist/**', '**/e2e/**'],
				include: ['src/**/*.{test,spec}.{js,ts,mjs,cjs,jsx,tsx}'], // Расширенный паттерн для поиска тестов в src и поддиректориях
				coverage: {
					provider: 'v8',
					reporter: ['text', 'html', 'clover'],
					exclude: ['node_modules/', 'dist/'],
					all: true, // Покрытие для всех файлов, даже без тестов (полезно для отчётов)
					// thresholds: {
					// 	lines: 80,
					// 	functions: 80,
					// 	branches: 80,
					// 	statements: 80
					// }
				}
			}
		})
	);
});
