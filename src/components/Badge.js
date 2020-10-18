/** @jsx jsx */
import { jsx, Styled, useThemeUI } from 'theme-ui'
import PropTypes from 'prop-types'
import { buttonVariantProp, buttonSizeProp } from '../theme/button'

const Badge = ({
	children = '',
	variant = 'default',
	size = 'm',
	className = '',
	sx = {},
	as = 'span',
	...props
}) => {
	const { theme } = useThemeUI()
	const finalSX = {
		...theme.badges.common,
		...theme.badges[variant],
		...theme.badges.sizes[size],
		...sx,
	}

	return (
		<Styled.div className={className} as={as} sx={finalSX} {...props}>
			{children}
		</Styled.div>
	)
}

Badge.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	className: PropTypes.string,
	sx: PropTypes.shape({}),
	variant: buttonVariantProp,
	size: buttonSizeProp,
	as: PropTypes.string,
}

export default Badge
