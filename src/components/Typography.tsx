/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { ReactElement, PropsWithChildren } from 'react'

type TypographyProps = PropsWithChildren<{
	as?: string
	color?: string
	variant?: string
	mb?: number
}>

const variant2ElementMap = {
	hero: 'h1',
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	subhead: 'h4',
	body: 'p',
	emphasis: 'span',
	footnote: 'span',
	caption: 'span',
}

const getTagByVariant = (variant: string): string => variant2ElementMap[variant] || 'span'

const Typography = ({
	variant = 'body',
	as,
	color = 'text',
	mb = 0,
	children,
	...props
}: TypographyProps): ReactElement => (
	<Styled.div
		as={as || getTagByVariant(variant)}
		sx={{ variant: `typography.${variant}`, color, mb }}
		{...props}
	>
		{children}
	</Styled.div>
)

export default Typography

const createVariantComponent = (variant: string, baseProps: {} = {}) => ({
	children,
	...props
}: TypographyProps): ReactElement => (
	<Typography {...baseProps} {...props} variant={variant}>
		{children}
	</Typography>
)

export const HeroTitle = createVariantComponent('hero')
export const H1 = createVariantComponent('h1')
export const H2 = createVariantComponent('h2')
export const H3 = createVariantComponent('h3')
export const Subhead = createVariantComponent('subhead', { color: 'disabled' })
export const Body = createVariantComponent('body')
export const Emphasis = createVariantComponent('emphasis')
export const Footnote = createVariantComponent('footnote')
export const Caption = createVariantComponent('caption')
