/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import styled from '@emotion/styled'
import { ReactElement, PropsWithChildren, ReactNode } from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

type ButtonProps = PropsWithChildren<{
	variant?: 'default' | 'primary' | 'success' | 'error' | 'warning' | 'disabled'
	as?: string
	size?: 's' | 'm' | 'l'
	align?: 'left' | 'center' | 'right'
	height?: 'auto' | number
	width?: 'auto' | number
	iconLeft?: FontAwesomeIconProps['icon']
	iconRight?: FontAwesomeIconProps['icon']
	sx?: {}
}>

const Icon = styled(FontAwesomeIcon)`
	font-size: 1rem;
	display: inline-block;
	align-self: center;

	&.left {
		margin-right: 8px;
		justify-self: flex-start;
	}

	&.right {
		justify-self: flex-end;
		margin-left: 8px;
	}
`

const ButtonText = styled.span`
	text-align: ${({ align }: { align: string }): string => align};
	width: 100%;
`

const getIcon = (
	position: 'left' | 'right',
	icon?: FontAwesomeIconProps['icon'] | null,
): ReactNode => {
	if (!icon) return <i />
	if (typeof icon === 'string') return <Icon className={position} icon={icon} />
	return icon
}

const Button = (props: ButtonProps): ReactElement => {
	const {
		children,
		sx = {},
		as = 'button',
		size = 'm',
		variant = 'default',
		align = 'left',
		height = 'auto',
		width = 'auto',
		iconLeft,
		iconRight,
	} = props
	return (
		<Styled.div
			className="button"
			as={as}
			sx={{
				variant: [`buttons.${variant}`, `buttons.sizes.${size}`],
				height,
				width,
				...sx,
			}}
			disabled={variant === 'disabled'}
		>
			<Styled.div
				as="span"
				sx={{
					width: '100%',
					height,
					textAlign: align,
					verticalAlign: 'text-top',
					display: 'inline-flex',
					justifyItems: 'stretch',
				}}
			>
				{getIcon('left', iconLeft)}
				<ButtonText align={align}>{children}</ButtonText>
				{getIcon('right', iconRight)}
			</Styled.div>
		</Styled.div>
	)
}

const ButtonGroupContainer = styled.div`
	& .button:not(:hover):not(:focus):not(:active) {
		box-shadow: -1px 0 0 0 rgba(0, 0, 0, 0.1);
	}
	& .button {
		border-radius: 0;
	}
	& .button:first-of-type {
		border-left: 0;
		border-radius: 4px 0 0 4px;
	}
	& .button:last-of-type {
		border-radius: 0 4px 4px 0;
	}
`
const ButtonGroup = ({ children }: PropsWithChildren<{}>): ReactElement => (
	<ButtonGroupContainer>{children}</ButtonGroupContainer>
)

Button.Group = ButtonGroup
export default Button
