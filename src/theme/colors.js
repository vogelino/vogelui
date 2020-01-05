import { lighten, setLightness, darken } from 'polished'
import PropTypes from 'prop-types'

const createColorScale = (color, colorName) => ({
	[colorName]: color,
	[`${colorName}Light`]: lighten(0.15, color),
	[`${colorName}ExtraLight`]: lighten(0.3, color),
	[`${colorName}UltraLight`]: setLightness(0.97, color),
	[`${colorName}Dark`]: darken(0.15, color),
	[`${colorName}ExtraDark`]: setLightness(0.2, color),
})

const baseColors = {
	black: '#000',
	white: '#fff',
	...createColorScale('#2980B9', 'primary'),
	...createColorScale('#7A8690', 'grey'),
	...createColorScale('#27AE60', 'success'),
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
