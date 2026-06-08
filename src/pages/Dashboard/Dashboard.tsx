import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useTranslation } from 'hooks/useTranslation';

export const Dashboard = () => {
	const { t } = useTranslation();

	return (
		<Box>
			<Typography>{t('Dashboard')}</Typography>
		</Box>
	);
};
