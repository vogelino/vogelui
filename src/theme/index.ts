import { rpxTransformers } from '@xstyled/system'
import { lighten, setLightness } from 'polished'

type BorderWidth = {
	default?: string
	large?: string
	extraLarge?: string
}

type BorderStyle = {
	solid?: BorderWidth
	dotted?: BorderWidth
	dashed?: BorderWidth
}

type Borders = {
	primary?: BorderStyle
	secondary?: BorderStyle
	error?: BorderStyle
	success?: BorderStyle
	warning?: BorderStyle
	white?: BorderStyle
	grey10?: BorderStyle
	grey20?: BorderStyle
	grey30?: BorderStyle
	grey50?: BorderStyle
	grey70?: BorderStyle
	grey90?: BorderStyle
	black?: BorderStyle
}

type Theme = {
	transformers?: {}
	colors?: {}
	fontSizes: number[]
	fontSizeVariants?: {
		body?: number
		display?: number
		small?: number
	}
	space?: number[]
	spaceVariants?: {
		none?: number
		xxs?: number
		xs?: number
		s?: number
		md?: number
		l?: number
		xl?: number
		xxl?: number
	}
	breakpoints?: string[]
	mediaQueries?: {
		small?: string
		medium?: string
		large?: string
	}
	fonts?: string[]
	fontVariants?: {
		ui?: string
		body?: string
		display?: string
		code?: string
	}
	fontWeights?: number[]
	fontWeightVariants?: {
		extraLight?: number
		light?: number
		regular?: number
		medium?: number
		bold?: number
		black?: number
	}
	lineHeights?: number[]
	lineHeightVariants?: {
		dense?: number
		medium?: number
		aerate?: number
	}
	letterSpacings?: Array<string | number>
	letterSpacingVariants?: {
		dense?: number | string
		medium?: number | string
		aerate?: number | string
	}
	radii?: number[]
	radiiVariants?: {
		small?: number
		default?: number
		total?: number
	}
	borderWidths?: number[]
	borders: Borders
	buttons?: {}
}

// Variants
const primary = '#3366FF'
const variants = {
	primary,
	secondary: lighten(0.35, primary),
	error: '#FF652D',
	success: '#50B922',
	warning: '#FFDB3D',
}

// Greyscale
const greyscale = {
	white: 'whitesmoke',
	grey10: 'rgba(0,0,0,.1)',
	grey20: 'rgba(0,0,0,.2)',
	grey30: 'rgba(0,0,0,.3)',
	grey50: 'rgba(0,0,0,.5)',
	grey70: 'rgba(0,0,0,7)',
	grey90: 'rgba(0,0,0,.9)',
	black: 'rgba(0,0,0,.9)',
}

// Colors
const colors = {
	...variants,
	...greyscale,
}

// Font related
const fontSizes = [8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 88]
const fonts = ['-apple-system', 'Georgia', 'Courrier', 'Helvetica']
const fontWeights = [300, 400, 500, 600, 700, 800]
const lineHeights = [1, 1.3, 1.5]
const letterSpacings = ['-0.01rem', '0', '0.02rem']

// Spacing & Layout
const space = [2, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88]
const breakpoints = ['40em', '52em', '64em']

// Shape styles
const radii = [2, 4, 9999]
const borderWidths = [1, 3, 10]
const borderStyles = ['solid', 'dotted', 'dashed']

const createBorders = (names: string[], styles: string[], widths: number[]): Borders =>
	names.reduce(
		(accNames, name) => ({
			...accNames,
			[name]: styles.reduce(
				(accStyles, style) => ({
					...accStyles,
					[style]: {
						default: `${widths[0]}px ${style} ${colors[name]}`,
						large: `${widths[1]}px ${style} ${colors[name]}`,
						extraLarge: `${widths[2]}px ${style} ${colors[name]}`,
					},
				}),
				{},
			),
		}),
		{},
	)

const borders = createBorders(Object.keys(colors), borderStyles, borderWidths)

type ButtonTheme = {
	[variant: string]: {
		background: string
		color: string
		border: string
	}
}

function padZero(str: string, len?: number): string {
	len = len || 2
	const zeros = new Array(len).join('0')
	return (zeros + str).slice(-len)
}

type BW = [string, string]
function invertColor(hex: string, bw?: BW): string {
	if (hex.indexOf('#') === 0) {
		hex = hex.slice(1)
	}
	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
	}
	if (hex.length !== 6) {
		throw new Error('Invalid HEX color.')
	}
	const r = parseInt(hex.slice(0, 2), 16)
	const g = parseInt(hex.slice(2, 4), 16)
	const b = parseInt(hex.slice(4, 6), 16)
	if (bw) {
		return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? bw[1] : bw[0]
	}
	const rS = (255 - r).toString(16)
	const gS = (255 - g).toString(16)
	const bS = (255 - b).toString(16)
	return `#${padZero(rS) + padZero(gS) + padZero(bS)}`
}

const createButtonThemes = (variants: string[]): ButtonTheme =>
	variants.reduce((acc, v) => {
		const color = colors[v]
		return {
			...acc,
			[v]: {
				background: color,
				color: invertColor(color, [
					setLightness(0.95, color),
					setLightness(0.15, color),
				]),
				border: 'none',
			},
		}
	}, {})

const theme: Theme = {
	transformers: {
		...rpxTransformers,
	},
	colors,
	fontSizes,
	fontSizeVariants: {
		body: fontSizes[2],
		display: fontSizes[4],
		small: fontSizes[0],
	},
	space,
	spaceVariants: {
		none: 0,
		xxs: space[0],
		xs: space[1],
		s: space[2],
		md: space[3],
		l: space[4],
		xl: space[5],
		xxl: space[6],
	},
	breakpoints,
	mediaQueries: {
		small: `@media screen and (min-width: ${breakpoints[0]})`,
		medium: `@media screen and (min-width: ${breakpoints[1]})`,
		large: `@media screen and (min-width: ${breakpoints[2]})`,
	},
	fonts,
	fontVariants: {
		ui: fonts[0],
		body: fonts[1],
		display: fonts[2],
		code: fonts[3],
	},
	fontWeights,
	fontWeightVariants: {
		extraLight: fontWeights[0],
		light: fontWeights[1],
		regular: fontWeights[2],
		medium: fontWeights[3],
		bold: fontWeights[4],
		black: fontWeights[5],
	},
	lineHeights,
	lineHeightVariants: {
		dense: lineHeights[0],
		medium: lineHeights[1],
		aerate: lineHeights[2],
	},
	letterSpacings,
	letterSpacingVariants: {
		dense: letterSpacings[0],
		medium: letterSpacings[1],
		aerate: letterSpacings[2],
	},
	radii,
	radiiVariants: {
		small: radii[0],
		default: radii[1],
		total: radii[2],
	},
	borderWidths,
	borders,
	buttons: {
		basic: {
			background: colors.secondary,
			color: colors.primary,
			border: 'none',
		},
		...createButtonThemes(Object.keys(variants)),
	},
}

export default theme
