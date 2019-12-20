// import React from 'react'
import styled from '@xstyled/styled-components'
import { css, FlattenSimpleInterpolation } from 'styled-components'
import { variant } from '@xstyled/system'

const camelize = (str: string): string =>
	str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())

type TypographyVariant =
	| 'common'
	| 'hero'
	| 'h1'
	| 'h2'
	| 'h3'
	| 'subhead'
	| 'footnote'
	| 'body'
	| 'emphasis'
	| 'caption'

const propertyIf = (variant: TypographyVariant, propertyName: string) => ({
	theme,
}: {
	theme: { typography: {} }
}): FlattenSimpleInterpolation => {
	const variantObj = theme.typography[variant]
	if (!variantObj) return css``
	const propResult = variantObj[camelize(propertyName)]
	if (!propResult) return css``
	return css`
		${propertyName}: ${propResult};
	`
}

const getVariant = (variant: TypographyVariant): {} => css`
	${propertyIf(variant, 'font-family')}
	${propertyIf(variant, 'font-size')}
	${propertyIf(variant, 'line-height')}
	${propertyIf(variant, 'letter-spacing')}
	${propertyIf(variant, 'font-weight')}
	${propertyIf(variant, 'text-decoration')}
	${propertyIf(variant, 'text-transform')}
	${propertyIf(variant, 'margin')}
`

const typeVariants = [
	'hero',
	'h1',
	'h2',
	'h3',
	'subhead',
	'footnote',
	'caption',
	'body',
	'emphasis',
].reduce(
	(acc, variant: TypographyVariant) => ({
		...acc,
		[variant]: getVariant(variant),
	}),
	{},
)

const variants = variant({
	prop: 'variant',
	default: 'body',
	variants: typeVariants,
})

const Typography = styled.pBox`
	${propertyIf('common', 'font-family')}
	${propertyIf('common', 'font-size')}
	${propertyIf('common', 'line-height')}
	${propertyIf('common', 'letter-spacing')}
	${propertyIf('common', 'font-weight')}
	${propertyIf('common', 'text-decoration')}
	${propertyIf('common', 'text-transform')}
	${propertyIf('common', 'margin')}
	padding: 0;
	${variants}
`

export default Typography
