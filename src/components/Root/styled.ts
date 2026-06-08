import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const Container = styled(Box)(({ theme }) => ({
	position: 'relative',
	width: '100%',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	transition: theme.transitions.create('backgroundColor', {
		easing: theme.transitions.easing.easeIn,
		duration: theme.transitions.duration.enteringScreen,
	}),
}));
