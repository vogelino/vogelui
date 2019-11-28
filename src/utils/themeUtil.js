import React from 'react';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';

const extendThemeWithDefaults = (t) => t;

export const withTheme = (Component) => ({ children, ...props }) => {
	const theme = useTheme();
	const defaultTheme = extendThemeWithDefaults(theme);

	return (
		<ThemeProvider theme={props.theme || defaultTheme}>
			<Component {...props}>{children}</Component>
		</ThemeProvider>
	);
};
