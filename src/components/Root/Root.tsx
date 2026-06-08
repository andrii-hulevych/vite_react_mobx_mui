import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import Typography from '@mui/material/Typography';

import { useTranslation } from 'hooks/useTranslation';

import { Container } from './styled';

export const Root = () => {
	const { t } = useTranslation();

	return (
		<Container>
			<Typography>{t('Hello world!')}</Typography>
			<Outlet />
			<TanStackRouterDevtools />
		</Container>
	);
};
