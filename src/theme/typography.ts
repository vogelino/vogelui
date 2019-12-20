type TypographyVariant = {
	fontFamily?: string
	fontSize?: string | number
	lineHeight?: string | number
	letterSpacing?: string | number
	fontWeight?: number | number
	textDecoration?: string
	textTransform?: string
	margin?: string | number
}

type Typography = {
	fontSizes: number[]
	fontSizeVariants?: {
		body?: number
		display?: number
		small?: number
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
	typography: {
		common: TypographyVariant
		hero: TypographyVariant
		h1: TypographyVariant
		h2: TypographyVariant
		h3: TypographyVariant
		subhead: TypographyVariant
		footnote: TypographyVariant
		body?: TypographyVariant
		emphasis: TypographyVariant
		caption: TypographyVariant
	}
}

const fontSizes = [8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 88]
const fonts = [
	'"-apple-system", sans-serif',
	'"Georgia", serif',
	'"Courrier", serif',
	'"Helvetica", sans-serif',
]
const fontWeights = [300, 400, 500, 600, 700, 800]
const lineHeights = [1, 1.3, 1.5]
const letterSpacings = ['-0.01rem', '0', '0.02rem']

const fontVariants = {
	ui: fonts[0],
	body: fonts[1],
	display: fonts[2],
	code: fonts[3],
}

const fontWeightVariants = {
	extraLight: fontWeights[0],
	light: fontWeights[1],
	regular: fontWeights[2],
	medium: fontWeights[3],
	bold: fontWeights[4],
	black: fontWeights[5],
}

const lineHeightVariants = {
	dense: lineHeights[0],
	medium: lineHeights[1],
	aerate: lineHeights[2],
}

const letterSpacingVariants = {
	dense: letterSpacings[0],
	medium: letterSpacings[1],
	aerate: letterSpacings[2],
}

const fontVariantsCommon = {
	fontFamily: fontVariants.body,
	textDecoration: 'none',
	textTransform: 'none',
	letterSpacing: '0',
	fontWeight: fontWeightVariants.regular,
	fontSize: `${fontSizes[2]}px`,
	lineHeight: `${fontSizes[2] + 2}px`,
	margin: 0,
}

const typography: Typography = {
	fontSizes,
	fonts,
	fontVariants,
	fontWeights,
	fontWeightVariants,
	lineHeights,
	lineHeightVariants,
	letterSpacings,
	letterSpacingVariants,
	typography: {
		common: fontVariantsCommon,
		hero: {
			fontFamily: fontVariants.display,
			fontSize: `${fontSizes[11]}px`,
			lineHeight: `${fontSizes[11] + 2}px`,
			fontWeight: fontWeightVariants.black,
		},
		h1: {
			fontFamily: fontVariants.ui,
			fontSize: `${fontSizes[5]}px`,
			lineHeight: `${fontSizes[5] + 2}px`,
			fontWeight: fontWeightVariants.bold,
		},
		h2: {
			fontFamily: fontVariants.ui,
			fontSize: `${fontSizes[4]}px`,
			lineHeight: `${fontSizes[4] + 2}px`,
			fontWeight: fontWeightVariants.bold,
		},
		h3: {
			fontFamily: fontVariants.ui,
			fontSize: `${fontSizes[3]}px`,
			lineHeight: `${fontSizes[3] + 2}px`,
			fontWeight: fontWeightVariants.bold,
		},
		subhead: {
			fontWeight: fontWeightVariants.medium,
		},
		caption: {
			fontWeight: fontWeightVariants.medium,
		},
		footnote: {
			fontSize: `${fontSizes[1]}px`,
			lineHeight: `${fontSizes[1] + 2}px`,
			fontWeight: fontWeightVariants.bold,
		},
		emphasis: {
			fontWeight: fontWeightVariants.bold,
		},
	},
}

export default typography
