import { lighten, setLightness, darken } from 'polished'

interface ColorScale {
	[key: string]: string
}

const createColorScale = (color: string, colorName: string): ColorScale => ({
	[colorName]: color,
	[`${colorName}Light`]: lighten(0.15, color),
	[`${colorName}ExtraLight`]: lighten(0.3, color),
	[`${colorName}UltraLight`]: setLightness(0.95, color),
	[`${colorName}Dark`]: darken(0.2, color),
	[`${colorName}ExtraDark`]: setLightness(0.15, color),
})

interface BaseColors {
	[key: string]: string
}

const baseColors: BaseColors = {
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

export default {
	...baseColors,
	...semanticColors,
}
