import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useTranslation } from 'hooks/useTranslation';

export const Monsters = () => {
	const { t } = useTranslation();

	return (
		<Box>
			<Typography>{t('Monsters')}</Typography>
		</Box>
	);
};
