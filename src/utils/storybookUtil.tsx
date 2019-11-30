import React, { ReactNode, PropsWithChildren, ReactElement, Component } from 'react'
import styled, { ThemeProvider } from '@xstyled/styled-components'
import theme from '../theme'

export const Container = styled.box`
	width: 100vw;
	height: 100vh;
	display: grid;
	align-content: center;
	align-items: center;
	justify-content: center;
`

const StoryWrapper = ({
	children,
	...props
}: PropsWithChildren<{}>): ReactElement<Component> => (
	<ThemeProvider theme={theme}>
		<Container {...props}>{children}</Container>
	</ThemeProvider>
)

const makeStory = (content: ReactNode): Function => (): ReactNode => (
	<StoryWrapper>{content}</StoryWrapper>
)

export default makeStory
