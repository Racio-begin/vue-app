// vitest.config.js
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config'; // Импорт вашего основного конфига Vite

export default defineConfig(({ mode }) => {
	// Вызываем функцию viteConfig, чтобы получить объект конфигурации (с учётом env и mode)
	const baseConfig = viteConfig({ mode });

	return mergeConfig(
		baseConfig,
		defineConfig({
			test: {
				globals: true, // Делает expect, test и т.д. глобальными для удобства
				environment: 'jsdom', // Для тестирования Vue-компонентов с DOM
				exclude: ['**/node_modules/**', '**/dist/**', '**/e2e/**'],
				include: ['src/**/*.{test,spec}.{js,ts,mjs,cjs,jsx,tsx}'], // Расширенный паттерн для поиска тестов в src и поддиректориях
				coverage: {
					provider: 'v8',
					reporter: ['text', 'html', 'clover'], // Добавил clover для CI, если нужно
					exclude: ['node_modules/', 'dist/'],
					all: true, // Покрытие для всех файлов, даже без тестов (полезно для отчётов)
					thresholds: { // Опционально: минимальное покрытие
						lines: 80,
						functions: 80,
						branches: 80,
						statements: 80
					}
				}
			}
		})
	);
});
