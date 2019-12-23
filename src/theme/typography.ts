type TypographyVariant = {
	fontFamily?: string
	fontSize?: string | number
	lineHeight?: string | number
	letterSpacing?: string | number
	fontWeight?: string | number
	textDecoration?: string
	textTransform?: string
	mb?: string | number
}

type Typography = {
	fontSizes: number[]
	fonts?: {
		[key: string]: string
	}
	fontWeights?: {
		body?: number
		heading?: number
		bold?: number
		semibold?: number
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

const fontSizes = [8, 14, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 88]
const fonts = {
	body: 'system-ui, sans-serif',
	heading: 'system-ui, sans-serif',
	monospace: '"Courrier", monospace',
}

const fontWeights = {
	light: 300,
	body: 400,
	bold: 600,
	heading: 800,
}

const lineHeights = {
	heading: 1.05,
	body: 1.125,
}

const letterSpacing = {
	heading: '0.025em',
	body: '0.01em',
}

const fontVariantsCommon = {
	fontFamily: 'body',
	textDecoration: 'none',
	textTransform: 'none',
	letterSpacing: 'body',
	fontWeight: 'body',
	fontSize: 'body',
	lineHeight: 'body',
	m: 0,
	mb: 1,
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
			mb: 4,
		},
		h1: {
			...fontVariantsCommon,
			fontFamily: 'heading',
			fontSize: 5,
			lineHeight: 'heading',
			letterSpacing: 'heading',
			fontWeight: 'heading',
			mb: 3,
		},
		h2: {
			...fontVariantsCommon,
			fontFamily: 'heading',
			fontSize: 4,
			lineHeight: 'heading',
			letterSpacing: 'heading',
			fontWeight: 'heading',
			mb: 3,
		},
		h3: {
			...fontVariantsCommon,
			fontFamily: 'heading',
			fontSize: 3,
			lineHeight: 'body',
			letterSpacing: 'heading',
			fontWeight: 'bold',
			mb: 2,
		},
		caption: {
			...fontVariantsCommon,
			fontSize: 1,
		},
		body: fontVariantsCommon,
		subhead: {
			...fontVariantsCommon,
			fontSize: 1,
			fontWeight: 700,
			textTransform: 'uppercase',
			letterSpacing: 'heading',
		},
		footnote: {
			...fontVariantsCommon,
			fontWeight: 'light',
			fontSize: 1,
		},
		emphasis: {
			fontWeight: 'bold',
		},
	},
}

export default typography
