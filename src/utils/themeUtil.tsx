import React, { ComponentType, ReactNode } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import defaultTheme from '../theme'

const extendThemeWithDefaults = (theme?: DefaultTheme): DefaultTheme => {
	if (!theme) return defaultTheme
	return { ...defaultTheme, ...theme }
}

type withThemeComponentProps = React.PropsWithChildren<{
	theme?: DefaultTheme
}>

export const withTheme = (Component: ComponentType): Function => ({
	children,
	...props
}: withThemeComponentProps): ReactNode => (
	<ThemeProvider theme={extendThemeWithDefaults(props.theme)}>
		<Component {...props}>{children}</Component>
	</ThemeProvider>
)
