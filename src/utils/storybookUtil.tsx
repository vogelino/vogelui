import React, { PropsWithChildren, ReactElement, Component } from 'react'
import styled, { ThemeProvider } from '@xstyled/styled-components'
import theme from '../theme'

export const Container = styled.box`
	width: 100vw;
	height: 100vh;
	display: grid;
	align-content: center;
	align-items: center;
	justify-content: center;
	background: primary;
	grid-gap: 2;
	grid-template-columns: auto auto;

	& > div {
		display: grid;
		justify-content: stretch;
		grid-gap: 2;
	}
`
const StoryWrapper = ({
	children,
	...props
}: PropsWithChildren<{}>): ReactElement<Component> => (
	<ThemeProvider theme={theme}>
		<Container {...props}>{children}</Container>
	</ThemeProvider>
)

export default StoryWrapper
