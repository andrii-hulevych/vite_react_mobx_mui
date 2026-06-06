import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	cssVariables: {
		cssVarPrefix: 'vrmm',
		colorSchemeSelector: 'data',
	},
	colorSchemes: {
		light: {
			palette: {
				primary: { main: '#1976d2', light: '#42a5f5', dark: '#1565c0' },
				secondary: {
					main: '#9c27b0',
					light: '#ba68c8',
					dark: '#7b1fa2',
				},
				error: { main: '#d32f2f' },
				warning: { main: '#ed6c02' },
				success: { main: '#2e7d32' },
				background: { default: '#f5f5f5', paper: '#ffffff' },
				text: { primary: '#1a1a1a', secondary: '#616161' },
			},
		},
		dark: {
			palette: {
				primary: { main: '#90caf9', light: '#bbdefb', dark: '#42a5f5' },
				secondary: {
					main: '#ce93d8',
					light: '#f3e5f5',
					dark: '#ab47bc',
				},
				error: { main: '#f44336' },
				warning: { main: '#ffa726' },
				success: { main: '#66bb6a' },
				background: { default: '#121212', paper: '#1e1e1e' },
				text: { primary: '#e0e0e0', secondary: '#9e9e9e' },
			},
		},
	},
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
		].join(','),
	},
});

export default theme;
