import { lighten, setLightness, darken } from 'polished'

export const createColorScale = (color, colorName) => ({
	[colorName]: color,
	[`${colorName}Light`]: lighten(0.15, color),
	[`${colorName}ExtraLight`]: lighten(0.3, color),
	[`${colorName}UltraLight`]: setLightness(0.97, color),
	[`${colorName}Dark`]: darken(0.15, color),
	[`${colorName}ExtraDark`]: setLightness(0.2, color),
})

export const getCustomColorTheme = (color) => {
	const colorScale = createColorScale(color, 'x')

	return {
		color: colorScale.xDark,
		backgroundColor: colorScale.xUltraLight,
		borderColor: colorScale.xExtraLight,
	}
}
