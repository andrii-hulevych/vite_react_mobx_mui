import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			pages: path.resolve(__dirname, 'src/pages'),
			components: path.resolve(__dirname, 'src/components'),
			locales: path.resolve(__dirname, 'src/locales'),
			hooks: path.resolve(__dirname, 'src/hooks'),
			router: path.resolve(__dirname, 'src/router'),
			theme: path.resolve(__dirname, 'src/theme'),
		},
	},
});
