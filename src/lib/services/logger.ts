import { Logger } from 'tslog';

import { env } from '@/env';

const ENVIRONMENT_TO_LEVEL: Record<typeof env.NEXT_PUBLIC_ENV, number> = {
	LOCAL: 0,
	DEV: 0,
	PROD: 4
};

const LOG_LEVEL_ICONS: Record<number, string> = {
	0: '🙂', // silly
	1: '🔍', // trace
	2: '🐞', // debug
	3: '💡', // info
	4: '⚠️ ', // warning
	5: '❌', // error
	6: '😵' // fatal
};

const logger = new Logger({
	minLevel: ENVIRONMENT_TO_LEVEL[env.NEXT_PUBLIC_ENV],
	maskValuesOfKeys: ['password', 'passwordConfirmation', 'email', 'credentials', 'credential'],
	prettyLogTimeZone: env.NEXT_PUBLIC_ENV !== 'DEV' ? 'local' : 'UTC',
	prettyLogTemplate: '{{icon}} [{{logLevelName}}] ', // default with exclusion of {{filePathWithLine}}`
	overwrite: {
		addPlaceholders: (logObjMeta, placeholderValues) => {
			placeholderValues.icon = LOG_LEVEL_ICONS[logObjMeta.logLevelId] ?? '';
		}
	}
});

export default logger;

