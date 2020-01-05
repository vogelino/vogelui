/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'theme-ui'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import theme from '../theme'

library.add(fas)

export const Container = ({ children }) => (
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

Container.propTypes = {
	children: PropTypes.node,
}

const StoryWrapper = ({ children, ...props }) => (
	<ThemeProvider theme={theme}>
		<Container {...props}>{children}</Container>
	</ThemeProvider>
)

StoryWrapper.propTypes = {
	children: PropTypes.node,
}

export default StoryWrapper
