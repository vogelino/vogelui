/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { useState } from 'react'

const noFunc = (_) => _
const TooltipWrapper = ({
	sx = {},
	children,
	onMouseEnter = noFunc,
	onMouseLeave = noFunc,
	onClick = noFunc,
}) => (
	<Styled.div
		sx={{
			display: 'inherit',
			position: 'relative',
			...sx,
		}}
		onMouseEnter={onMouseEnter}
		onMouseLeave={onMouseLeave}
		onClick={onClick}
	>
		{children}
	</Styled.div>
)

TooltipWrapper.propTypes = {
	sx: PropTypes.shape({}),
	children: PropTypes.node,
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func,
	onClick: PropTypes.func,
}

const getPositionStyles = (position = 'top-center') => {
	switch (position) {
		case 'top-center':
			return {
				bottom: 'calc(100% + 0.5rem)',
				left: '50%',
				transform: 'translateX(-50%)',
			}
		case 'top-left':
			return { bottom: 'calc(100% + 0.5rem)', left: '0' }
		case 'top-right':
			return { bottom: 'calc(100% + 0.5rem)', right: '0' }
		case 'bottom-center':
			return {
				top: 'calc(100% + 0.5rem)',
				left: '50%',
				transform: 'translateX(-50%)',
			}
		case 'bottom-left':
			return { top: 'calc(100% + 0.5rem)', left: '0' }
		case 'bottom-right':
			return { top: 'calc(100% + 0.5rem)', right: '0' }
		case 'right-center':
			return {
				top: '50%',
				left: 'calc(100% + 0.5rem)',
				transform: 'translateY(-50%)',
			}
		case 'right-top':
			return { top: '0', left: 'calc(100% + 0.5rem)' }
		case 'right-bottom':
			return { bottom: '0', left: 'calc(100% + 0.5rem)' }
		case 'left-center':
			return {
				top: '50%',
				right: 'calc(100% + 0.5rem)',
				transform: 'translateY(-50%)',
			}
		case 'left-top':
			return { top: '0', right: 'calc(100% + 0.5rem)' }
		case 'left-bottom':
			return { bottom: '0', right: 'calc(100% + 0.5rem)' }
		default:
			return {}
	}
}

const TooltipStrip = ({ text = '', isVisible, position, variant = 'dark', theme }) => (
	<Styled.div
		sx={{
			opacity: isVisible ? 1 : 0,
			pointerEvents: isVisible ? 'all' : 'none',
			position: 'absolute',
			zIndex: 1,
			variant: 'tooltips',
			...(variant === 'dark'
				? theme.tooltips.variants.dark
				: theme.tooltips.variants.light),
			...getPositionStyles(position),
		}}
	>
		{text}
	</Styled.div>
)

TooltipStrip.propTypes = {
	sx: PropTypes.shape({}),
	theme: PropTypes.shape({
		tooltips: PropTypes.shape({
			variants: PropTypes.shape({
				light: PropTypes.shape({}),
				dark: PropTypes.shape({}),
			}),
		}),
	}).isRequired,
	children: PropTypes.node,
	text: PropTypes.string.isRequired,
	isVisible: PropTypes.bool,
	variant: PropTypes.oneOf(['light', 'dark']),
	position: PropTypes.oneOf([
		'top-left',
		'top-center',
		'top-right',
		'right-top',
		'right-center',
		'right-bottom',
		'bottom-left',
		'bottom-center',
		'bottom-right',
		'left-top',
		'left-center',
		'left-bottom',
	]),
}

const Tooltip = ({ sx = {}, children = '', text = '', position, variant }) => {
	const [isVisible, setIsVisible] = useState(false)
	const { theme } = useThemeUI()
	return (
		<TooltipWrapper
			sx={sx}
			onMouseEnter={() => setIsVisible(true)}
			onMouseLeave={() => setIsVisible(false)}
		>
			<TooltipStrip
				text={text}
				position={position}
				isVisible={isVisible}
				variant={variant}
				theme={theme}
			/>
			{children}
		</TooltipWrapper>
	)
}

Tooltip.propTypes = {
	sx: PropTypes.shape({}),
	children: PropTypes.node,
	text: TooltipStrip.propTypes.text,
	position: TooltipStrip.propTypes.position,
	variant: TooltipStrip.propTypes.variant,
}

export default Tooltip
