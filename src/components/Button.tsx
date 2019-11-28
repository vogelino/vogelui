import React, { PropsWithChildren } from 'react';
import { Button as SUIButton } from '@smooth-ui/core-sc';

import { withTheme } from '../utils/themeUtil';

export default withTheme(({ children, ...props }: PropsWithChildren<{}>) => (
	<SUIButton {...props}>
		{children}
	</SUIButton>
));
