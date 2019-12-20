/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { PropsWithChildren, ReactElement, Component } from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'

const getStretchConfig = ({ stretch }): 'stretch' | 'start' =>
	stretch ? 'stretch' : 'start'

type ContainerProps = PropsWithChildren<{ stretch?: boolean }>

export const Container = ({ children, stretch }: ContainerProps): ReactElement => (
	<Styled.root
		sx={{
			width: '100vw',
			height: '100vh',
			display: 'grid',
			alignContent: 'center',
			alignItems: 'center',
			justifyContent: 'stretch',
			background: 'primary',
			gridGap: '2',
			gridTemplateColumns: 'auto auto',
			maxWidth: '300px',
			margin: '0 auto',
			'& > div': {
				display: 'grid',
				justifyContent: getStretchConfig({ stretch }),
				gridGap: 5,
			},
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
		<Container {...props} stretch={stretch || undefined}>
			{children}
		</Container>
	</ThemeProvider>
)

export default StoryWrapper
