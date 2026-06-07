import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			modules: path.resolve(__dirname, 'src/modules'),
			locales: path.resolve(__dirname, 'src/locales'),
			hooks: path.resolve(__dirname, 'src/hooks'),
			theme: path.resolve(__dirname, 'src/theme'),
		},
	},
});
