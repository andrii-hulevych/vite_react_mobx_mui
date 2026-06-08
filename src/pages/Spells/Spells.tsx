import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useTranslation } from 'hooks/useTranslation';

export const Spells = () => {
	const { t } = useTranslation();

	return (
		<Box>
			<Typography>{t('Spells')}</Typography>
		</Box>
	);
};
