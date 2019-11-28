import React, { ComponentType } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components';
import defaultTheme from '../theme'

const extendThemeWithDefaults = (theme?: DefaultTheme) => {
	if (!theme) return defaultTheme;
	return { ...defaultTheme, ...theme };
}

type withThemeComponentProps = React.PropsWithChildren<{
	theme?: DefaultTheme,
}>

export const withTheme = (Component: ComponentType) => ({
	children,
	...props
}: withThemeComponentProps) => (
	<ThemeProvider theme={extendThemeWithDefaults(props.theme)}>
		<Component {...props}>{children}</Component>
	</ThemeProvider>
)
