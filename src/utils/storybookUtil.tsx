import React, { ReactNode, PropsWithChildren, ReactElement, Component } from 'react'
import { Box as SUIBox } from '@smooth-ui/core-sc'
import styled from 'styled-components'

const Container = styled(SUIBox)`
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
	<Container {...props}>{children}</Container>
)

const makeStory = (content: ReactNode): Function => (): ReactNode => (
	<StoryWrapper>{content}</StoryWrapper>
)

export default makeStory
