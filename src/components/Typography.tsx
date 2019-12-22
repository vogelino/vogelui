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
	h4: 'h3',
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
