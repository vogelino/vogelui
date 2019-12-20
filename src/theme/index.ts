import { rpxTransformers } from '@xstyled/system'
import { lighten, transparentize as alpha, setLightness } from 'polished'
import { invertColor } from '../utils/colorUtil'
import typography from './typography'

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

export type Theme = {
	transformers?: {}
	colors?: {}
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
	radii?: number[]
	radiiVariants?: {
		small?: number
		default?: number
		total?: number
	}
	borderWidths?: number[]
	borders: Borders
	buttons: {}
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

const getAlphaVariant = (color: string, alphaValue: number): {} =>
	alpha(alphaValue, color)

const createButtonThemes = (variants: string[]): ButtonTheme =>
	variants.reduce((acc, v) => {
		const color = colors[v]
		const defaultState = {
			ripple: color,
			background: color,
			color: invertColor(color, [
				setLightness(0.95, color),
				setLightness(0.15, color),
			]),
			border: 'none',
			transition: 'all 100ms ease-out',
			boxShadow: `0 0 0 0 rgba(255, 255, 255, 0.4), inset 0 0 0 0 ${getAlphaVariant(
				color,
				0,
			)}`,
		}
		const hoverState = {
			background: setLightness(0.95, defaultState.background),
			color: setLightness(0.3, defaultState.background),
			border: defaultState.border,
			boxShadow: `0 0 0 0 rgba(255, 255, 255, 0.4), inset 0 0 0 2px ${defaultState.background}`,
		}
		const focusState = {
			background: hoverState.background,
			color: hoverState.color,
			border: hoverState.border,
			boxShadow: `0 0 0 1px rgba(255, 255, 255, 0.4), inset 0 0 0 4px ${defaultState.background}`,
		}
		return {
			...acc,
			[v]: {
				...defaultState,
				hover: hoverState,
				focus: focusState,
			},
		}
	}, {})

const buttonsThemes = createButtonThemes(Object.keys(variants))
const theme: Theme = {
	transformers: {
		...rpxTransformers,
	},
	colors,
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
	radii,
	radiiVariants: {
		small: radii[0],
		default: radii[1],
		total: radii[2],
	},
	borderWidths,
	borders,
	buttons: {
		radius: radii[2],
		basic: {
			...buttonsThemes.primary,
			background: colors.secondary,
			color: colors.primary,
		},
		...buttonsThemes,
	},
	...typography,
}

export default theme
