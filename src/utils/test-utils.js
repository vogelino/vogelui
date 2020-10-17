// test-utils.js
import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'theme-ui'
import PropTypes from 'prop-types'
import theme from '../theme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const AllTheProviders = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

AllTheProviders.propTypes = {
	children: PropTypes.node.isRequired,
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
