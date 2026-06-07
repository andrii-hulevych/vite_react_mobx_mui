import { useTranslation as useTranslationReactNext } from 'react-i18next';
import { instance } from 'locales/instance';

export const useTranslation = () => {
	const { t, i18n } = useTranslationReactNext('default', {
		i18n: instance,
	});
	return { t, i18n };
};
