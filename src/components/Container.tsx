import React from 'react';
import { withTheme } from '../utils/themeUtil';

export const Container = withTheme(({
	children
}) => (
	<section>
		{children}
	</section>
));
