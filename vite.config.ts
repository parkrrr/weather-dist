import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/weather/',
	build: {
		outDir: './dist/weather'
	},
	plugins: [preact()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		}
	},
	preview: {
		host: '127.0.0.1',
		port: 3000,
		strictPort: true
	}
});
