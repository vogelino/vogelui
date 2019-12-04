import React, { PropsWithChildren, ReactElement, Component } from 'react'
import styled, { ThemeProvider } from '@xstyled/styled-components'
import theme from '../theme'

export const Container = styled.box`
	width: 100vw;
	height: 100vh;
	display: grid;
	align-content: center;
	align-items: center;
	justify-content: stretch;
	background: primary;
	grid-gap: 5;
	grid-template-columns: auto auto;
	max-width: 400px;
	margin: 0 auto;

	& > div {
		display: grid;
		justify-content: stretch;
		grid-gap: 5;
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
