/** @jsx jsx */
import { useState } from 'react'
import PropTypes from 'prop-types'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from './Icon'
import { Emphasis } from './Typography'

const PrefixIcon = styled(Icon)`
	margin-right: 0.5rem;
`

const CloseIcon = styled(Icon)`
	transform: rotate(0);
	transition: transform 100ms ease-out;
	cursor: pointer;
`

const ClearIcon = ({ right, onClick, ...props }) => (
	<Styled.div
		as="span"
		sx={{
			position: 'absolute',
			top: '50%',
			right,
			cursor: 'pointer',
			transform: 'translateY(-50%)',
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
			[`&:hover > ${CloseIcon}`]: {
				transform: 'rotate(90deg)',
			},
		}}
		onClick={onClick}
	>
		<CloseIcon icon="times" {...props} />
	</Styled.div>
)

ClearIcon.propTypes = {
	right: PropTypes.number,
	onClick: PropTypes.func.isRequired,
}

const Alert = (
	{
		children,
		title,
		icon,
		variant = 'default',
		as = 'div',
		sx = {},
		dismissable = true,
	} = {
		children: '',
		title: '',
		icon: undefined,
		variant: 'default',
		as: 'div',
		sx: {},
		dismissable: true,
	},
) => {
	const [isVisible, setVisible] = useState(true)
	const { theme } = useThemeUI()
	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ y: 8, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -8, opacity: 0 }}
				>
					<Styled.div
						data-testid="alert"
						as={as}
						sx={{
							...theme.alerts.common,
							...theme.alerts[variant],
							position: 'relative',
							...sx,
						}}
					>
						{icon && <PrefixIcon icon={icon} />}
						{title && (
							<Emphasis color={theme.alerts[variant].color}>
								{title}
							</Emphasis>
						)}
						{children}
						{dismissable && (
							<ClearIcon
								data-testid="close-icon"
								onClick={() => setVisible(false)}
								right={Math.ceil(theme.alerts.common.paddingRight / 2)}
							/>
						)}
					</Styled.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
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
