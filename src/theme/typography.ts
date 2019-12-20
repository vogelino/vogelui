type TypographyVariant = {
	fontFamily?: string
	fontSize?: string | number
	lineHeight?: string | number
	letterSpacing?: string | number
	fontWeight?: string | number
	textDecoration?: string
	textTransform?: string
	margin?: string | number
}

type Typography = {
	fontSizes: number[]
	fonts?: {
		body?: string
		heading?: string
		monospace?: string
	}
	fontWeights?: {
		body?: number
		heading?: number
		bold?: number
	}
	lineHeights?: {
		body?: number
		heading?: number
	}
	letterSpacing?: {
		body?: number | string
		heading?: number | string
	}
	typography?: {
		hero?: TypographyVariant
		h1?: TypographyVariant
		h2?: TypographyVariant
		h3?: TypographyVariant
		subhead?: TypographyVariant
		footnote?: TypographyVariant
		body?: TypographyVariant
		emphasis?: TypographyVariant
		caption?: TypographyVariant
	}
}

const fontSizes = [8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 88]
const fonts = {
	body: '"-apple-system", sans-serif',
	heading: '"Georgia", serif',
	monospace: '"Courrier", serif',
}

const fontWeights = {
	body: 500,
	bold: 700,
	heading: 800,
}

const lineHeights = {
	heading: 1,
	body: 1.125,
}

const letterSpacing = {
	heading: '0.025em',
	body: '0',
}

const fontVariantsCommon = {
	fontFamily: 'body',
	textDecoration: 'none',
	textTransform: 'none',
	letterSpacing: 'body',
	fontWeight: 'body',
	fontSize: 'body',
	lineHeight: 'body',
	margin: 0,
}

const typography: Typography = {
	fontSizes,
	fonts,
	fontWeights,
	lineHeights,
	letterSpacing,
	typography: {
		hero: {
			...fontVariantsCommon,
			fontFamily: 'heading',
			fontSize: 11,
			lineHeight: 'heading',
			letterSpacing: 'heading',
			fontWeight: 'heading',
		},
		h1: {
			...fontVariantsCommon,
			fontFamily: 'heading',
			fontSize: 5,
			lineHeight: 'heading',
			letterSpacing: 'heading',
			fontWeight: 'bold',
		},
		h2: {
			...fontVariantsCommon,
			fontFamily: 'heading',
			fontSize: 4,
			lineHeight: 'heading',
			letterSpacing: 'heading',
			fontWeight: 'bold',
		},
		h3: {
			...fontVariantsCommon,
			fontFamily: 'heading',
			fontSize: 3,
			lineHeight: 'heading',
			letterSpacing: 'heading',
			fontWeight: 'bold',
		},
		caption: fontVariantsCommon,
		body: fontVariantsCommon,
		footnote: {
			...fontVariantsCommon,
			fontSize: 1,
			fontWeight: 'bold',
			textTransform: 'uppercase',
		},
		emphasis: {
			fontWeight: 'bold',
		},
	},
}

export default typography
