/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colorPropType } from '../theme/colors'

const IconEl = styled(FontAwesomeIcon)`
	font-size: 1rem;
	display: inline-block;
	align-self: center;
	color: ${({ color }) => color};
	cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

	&.left {
		margin-right: 8px;
		justify-self: flex-start;
	}

	&.right {
		justify-self: flex-end;
		margin-left: 8px;
	}
`

export const Icon = ({ icon, position = '', defaultColor, onClick, className = '' }) => {
	const { theme } = useThemeUI()

	if (!icon) return null
	if (typeof icon === 'string')
		return (
			<IconEl
				color={theme.colors[defaultColor || 'currentColor']}
				className={`${className} ${position}`}
				icon={icon}
				onClick={onClick}
			/>
		)
	const color = theme.colors[icon.color] || defaultColor
	if ('icon' in icon && 'color' in icon)
		return (
			<IconEl
				className={`${className} ${position}`}
				color={color}
				icon={icon.icon}
				onClick={onClick}
			/>
		)
	return null
}

Icon.propTypes = {
	icon: PropTypes.oneOfType([FontAwesomeIcon.propTypes.icon, FontAwesomeIcon]),
	position: PropTypes.oneOf(['left', 'right', '']),
	onClick: PropTypes.func,
	defaultColor: colorPropType,
}
IconEl.propTypes = Icon.propTypes

export default Icon
