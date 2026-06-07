import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const instance = createInstance();

instance
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		ns: 'default',
		defaultNS: 'default',
		contextSeparator: '_c_',
		pluralSeparator: '_p_',
		fallbackLng: 'en',
		interpolation: {
			skipOnVariables: false,
			escapeValue: false, // not needed for react as it escapes by default
		},
	});

export { instance };
