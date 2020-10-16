/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, Styled } from 'theme-ui'
import { typographyVariantPropType } from '../theme/typography'
import { colorPropType } from '../theme/colors'

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

const getTagByVariant = (variant) => variant2ElementMap[variant] || 'span'

const Typography = ({
	variant = 'body',
	as,
	color = 'text',
	mb = 0,
	children,
	...props
}) => (
	<Styled.div
		as={as || getTagByVariant(variant)}
		sx={{ variant: `typography.${variant}`, color, mb }}
		{...props}
	>
		{children}
	</Styled.div>
)

Typography.propTypes = {
	children: PropTypes.node.isRequired,
	sx: PropTypes.shape({}),
	as: PropTypes.string,
	variant: typographyVariantPropType,
	color: colorPropType,
	mb: PropTypes.number,
	size: PropTypes.oneOf(['s', 'm', 'l']),
}

export default Typography

const createVariantComponent = (variant, baseProps = {}) => {
	const TypographyComponent = ({ children, ...props }) => (
		<Typography {...baseProps} {...props} variant={variant}>
			{children}
		</Typography>
	)

	TypographyComponent.propTypes = {
		children: Typography.propTypes.children,
	}

	return TypographyComponent
}

export const HeroTitle = createVariantComponent('hero')
export const H1 = createVariantComponent('h1')
export const H2 = createVariantComponent('h2')
export const H3 = createVariantComponent('h3')
export const Subhead = createVariantComponent('subhead', { color: 'disabled' })
export const Body = createVariantComponent('body')
export const Emphasis = createVariantComponent('emphasis')
export const Footnote = createVariantComponent('footnote')
export const Caption = createVariantComponent('caption')
