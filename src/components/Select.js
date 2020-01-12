/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from 'theme-ui'
import ReactSelect from 'react-select'

const Select = ({ isSearchable = false, ...props }) => (
	<ReactSelect {...props} isSearchable={isSearchable} />
)

Select.propTypes = {
	...ReactSelect.propTypes,
	isSearchable: PropTypes.bool,
}

export default Select
