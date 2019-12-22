/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { PropsWithChildren, ReactElement, Component } from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'

type ContainerProps = PropsWithChildren<{}>

export const Container = ({ children }: ContainerProps): ReactElement => (
	<Styled.root
		sx={{
			width: '100vw',
			height: '100vh',
			display: 'grid',
			alignContent: 'center',
			alignItems: 'center',
			justifyContent: 'stretch',
			background: 'primary',
			gridTemplateColumns: 'auto',
			maxWidth: '720px',
			margin: '0 auto',
		}}
	>
		{children}
	</Styled.root>
)

const StoryWrapper = ({
	children,
	stretch,
	...props
}: PropsWithChildren<{ stretch?: boolean }>): ReactElement<Component> => (
	<ThemeProvider theme={theme}>
		<Container {...props}>{children}</Container>
	</ThemeProvider>
)

export default StoryWrapper
