/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import styled from '@emotion/styled'
import Icon from './Icon'
import { buttonVariantProp, buttonSizeProp } from '../theme/button'

const ButtonText = styled.span`
	text-align: ${({ align }) => align};
	width: 100%;
`

const Button = ({
	children,
	sx = {},
	as = 'button',
	size = 'm',
	variant = 'default',
	align = 'left',
	height = 'auto',
	width = 'auto',
	onClick = () => {},
	iconLeft,
	iconRight,
	iconCenter,
}) => {
	const { theme } = useThemeUI()
	return (
		<Styled.div
			className="button"
			data-testid="button"
			as={as}
			sx={{
				whiteSpace: 'nowrap',
				...theme.buttons[variant],
				...theme.buttons.sizes[size],
				height,
				width,
				...(!children && iconCenter
					? {
							paddingLeft: theme.buttons.sizes[size].paddingLeft - 1,
							paddingRight: theme.buttons.sizes[size].paddingRight - 1,
					  }
					: {}),
				...sx,
			}}
			onClick={onClick}
			disabled={variant === 'disabled'}
		>
			<Styled.div
				as="span"
				sx={{
					width: '100%',
					height,
					textAlign: align,
					verticalAlign: 'middle',
					display: 'inline-flex',
					justifyItems: 'stretch',
				}}
			>
				<Icon data-testid="left-icon" position="left" icon={iconLeft} />
				<Icon data-testid="center-icon" position="center" icon={iconCenter} />
				<ButtonText align={align}>{children}</ButtonText>
				<Icon data-testid="right-icon" position="right" icon={iconRight} />
			</Styled.div>
		</Styled.div>
	)
}

Button.propTypes = {
	children: PropTypes.node,
	sx: PropTypes.shape({}),
	as: PropTypes.string,
	variant: buttonVariantProp,
	size: buttonSizeProp,
	align: PropTypes.oneOf(['left', 'center', 'right']),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	iconLeft: Icon.propTypes.icon,
	iconRight: Icon.propTypes.icon,
	iconCenter: Icon.propTypes.icon,
	onClick: PropTypes.func,
}

const ButtonGroupContainer = styled.div`
	& .button:not(:hover):not(:focus):not(:active) {
		box-shadow: -1px 0 0 0 rgba(0, 0, 0, 0.1);
	}
	& .button {
		border-radius: 1px;
	}
	& .button:first-of-type {
		border-left: 0;
		border-radius: 4px 1px 1px 4px;
	}
	& .button:last-of-type {
		border-radius: 1px 4px 4px 1px;
	}
`
const ButtonGroup = ({ children }) => (
	<ButtonGroupContainer>{children}</ButtonGroupContainer>
)

ButtonGroup.propTypes = {
	children: PropTypes.node.isRequired,
}

Button.Group = ButtonGroup
export default Button
