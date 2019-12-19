import React, { PropsWithChildren, ReactElement, Component } from 'react'
import styled, { ThemeProvider } from '@xstyled/styled-components'
import theme from '../theme'

const getStretchConfig = ({ stretch }): 'stretch' | 'start' =>
	stretch ? 'stretch' : 'start'

export const Container = styled.box`
	width: 100vw;
	height: 100vh;
	display: grid;
	align-content: center;
	align-items: center;
	justify-content: stretch;
	background: primary;
	grid-gap: 2;
	grid-template-columns: auto auto;
	max-width: 300px;
	margin: 0 auto;

	& > div {
		display: grid;
		justify-content: ${getStretchConfig};
		grid-gap: 5;
	}
`
const StoryWrapper = ({
	children,
	stretch,
	...props
}: PropsWithChildren<{ stretch?: boolean }>): ReactElement<Component> => (
	<ThemeProvider theme={theme}>
		<Container {...props} stretch={stretch || undefined}>
			{children}
		</Container>
	</ThemeProvider>
)

export default StoryWrapper
