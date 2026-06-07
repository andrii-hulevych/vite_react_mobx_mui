import Typography from '@mui/material/Typography';

import { useTranslation } from 'hooks/useTranslation';

import { Container } from './styled';

export const App = () => {
	const { t } = useTranslation();

	return (
		<Container>
			<Typography>{t('Hello world!')}</Typography>
		</Container>
	);
};
