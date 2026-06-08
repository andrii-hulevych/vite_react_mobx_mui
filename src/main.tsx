import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from '@tanstack/react-router';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { instance } from 'locales/instance';
import { router } from 'router/instance';
import theme from 'theme';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<I18nextProvider i18n={instance}>
			<ThemeProvider theme={theme} defaultMode='system'>
				<CssBaseline />
				<RouterProvider router={router} />
			</ThemeProvider>
		</I18nextProvider>
	</StrictMode>,
);
