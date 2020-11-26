import PropTypes from 'prop-types'
import { createColorScale } from '../utils/colorUtil'

const baseColors = {
	black: '#000',
	white: '#fff',
	...createColorScale('#1EA8FD', 'primary'),
	...createColorScale('#7A8690', 'grey'),
	...createColorScale('#66bf3c', 'success'),
	...createColorScale('#C0392B', 'error'),
	...createColorScale('#F1C40F', 'warning'),
}

const semanticColors = {
	text: baseColors.primaryExtraDark,
	background: baseColors.white,
	disabled: baseColors.greyLight,
}

const allColors = {
	...baseColors,
	...semanticColors,
}

export default allColors

export const colorPropType = PropTypes.oneOf(Object.keys(allColors))
