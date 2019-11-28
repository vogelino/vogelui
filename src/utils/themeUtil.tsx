import React from 'react';
import { ThemeProvider, useTheme } from '@material-ui/core/styles';

const extendThemeWithDefaults = (t: object) => t;

export const withTheme = (Component: Function) => ({
	children,
	...props
}: {
	children?: React.ReactNode,
	theme?: object,
}) => {
	const theme = useTheme();
	const defaultTheme = extendThemeWithDefaults(theme);

	return (
		<ThemeProvider theme={props.theme || defaultTheme}>
			<Component {...props}>{children}</Component>
		</ThemeProvider>
	);
};
