/** @jsx jsx */
import { useState } from 'react'
import PropTypes from 'prop-types'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import styled from '@emotion/styled'
import Icon from './Icon'
import { Emphasis } from './Typography'

const PrefixIcon = styled(Icon)`
	margin-right: 0.5rem;
`

const ClearIcon = ({ right, onClick }) => (
	<Styled.div
		as="span"
		sx={{
			position: 'absolute',
			top: '50%',
			right,
			transform: 'translateY(-50%)',
			cursor: 'pointer',
			width: 16,
			height: 16,
			display: 'grid',
			alignItems: 'center',
			justifyItems: 'center',
			opacity: 0.4,
			transition: 'opacity 100ms ease-out',
			'&:hover': {
				opacity: 1,
			},
		}}
	>
		<Icon icon="times" onClick={onClick} />
	</Styled.div>
)

ClearIcon.propTypes = {
	right: PropTypes.number,
	onClick: PropTypes.func.isRequired,
}

const Alert = ({
	children,
	title,
	icon,
	variant = 'default',
	as = 'div',
	sx = {},
	dismissable = true,
}) => {
	const [isVisible, setVisible] = useState(true)
	const { theme } = useThemeUI()
	return isVisible ? (
		<Styled.div
			as={as}
			sx={{
				...theme.alerts.common,
				...theme.alerts[variant],
				position: 'relative',
				...sx,
			}}
		>
			{icon && <PrefixIcon icon={icon} />}
			{title && <Emphasis color={theme.alerts[variant].color}>{title}</Emphasis>}
			{children}
			{dismissable && (
				<ClearIcon
					onClick={() => setVisible(false)}
					right={theme.alerts.common.paddingRight}
				/>
			)}
		</Styled.div>
	) : null
}

Alert.propTypes = {
	as: PropTypes.string,
	variant: PropTypes.oneOf(['default', 'primary', 'error', 'success', 'warning']),
	sx: PropTypes.shape({}),
	children: PropTypes.node,
	dismissable: PropTypes.bool,
	title: PropTypes.string,
	icon: Icon.propTypes.icon,
}

export default Alert
