/** @jsx jsx */
import { jsx, Styled, useThemeUI } from 'theme-ui'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { buttonVariantProp, buttonSizeProp } from '../theme/button'
import { getCustomColorTheme } from '../utils/colorUtil'

const DOT_STYLES = {
	border: 'none',
	height: 8,
	width: 8,
	boxShadow: `0 0 0 2px white`,
	padding: 0,
}

const getOffsetStyles = (hasOffset, contentIsText) =>
	hasOffset
		? {
				position: 'absolute',
				top: 0,
				right: 0,
				...(contentIsText
					? {
							transform: 'translate(100%, -50%)',
					  }
					: {
							transform: 'translate(50%, -50%)',
					  }),
		  }
		: {}

const formatNumber = (number) => {
	if (typeof number === 'undefined') return null
	if (number >= 100) return '+99'
	if (number <= -100) return '-99'
	return number
}

const Wrapper = styled.span`
	position: relative;
	display: inline-block;
`

const Badge = ({
	children = '',
	variant = 'default',
	size = 'm',
	className = '',
	sx = {},
	as = 'span',
	content = undefined,
	color = undefined,
	...props
}) => {
	const { theme } = useThemeUI()
	const finalSX = {
		...theme.badges.common,
		...theme.badges[variant],
		...theme.badges.sizes[size],
		...(color ? getCustomColorTheme(color) : {}),
		...getOffsetStyles(!!children, typeof children === 'string'),
		...(typeof content === 'undefined'
			? {
					...DOT_STYLES,
					background:
						variant !== 'default' ? theme.colors[variant] : color || 'red',
			  }
			: {}),
		...sx,
	}
	const badge = (
		<Styled.div className={className} as={as} sx={finalSX} {...props}>
			{typeof content === 'number' ? formatNumber(content) : content}
		</Styled.div>
	)

	return children ? (
		<Wrapper>
			{badge}
			{children}
		</Wrapper>
	) : (
		badge
	)
}

Badge.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
	className: PropTypes.string,
	sx: PropTypes.shape({}),
	variant: buttonVariantProp,
	size: buttonSizeProp,
	as: PropTypes.string,
	color: PropTypes.string,
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
}

export default Badge
