/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import styled from '@emotion/styled'
import { ReactElement, PropsWithChildren, ReactNode } from 'react'

type ButtonProps = PropsWithChildren<{
	variant?: 'default' | 'primary' | 'success' | 'error' | 'warning' | 'disabled'
	as?: string
	size?: 's' | 'm' | 'l'
	align?: 'left' | 'center' | 'right'
	height?: 'auto' | number
	width?: 'auto' | number
	iconLeft?: Function | string | ReactNode
	iconRight?: Function | string | ReactNode
	sx?: {}
}>

const Icon = styled.span`
	width: 16px;
	height: 16px;
	display: inline-block;
	align-self: center;
	border-radius: 50%;
	background: black;

	&.right {
		justify-self: flex-end;
	}
`

const ButtonText = styled.span`
	display: inline-grid;
	align-content: center;
`

const getIcon = (
	position: 'left' | 'right',
	icon: ButtonProps['iconLeft'],
	props: ButtonProps,
): ReactNode => {
	if (!icon) return <i />
	if (typeof icon === 'function') return icon(props, position)
	if (typeof icon === 'string') return <Icon className={position} />
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
					display: 'inline-grid',
					textAlign: align,
					verticalAlign: 'text-top',
					gridTemplateColumns: (): string => {
						if (align === 'center') return '24px auto 24px'
						if (!iconLeft && !iconRight) return '0 auto 0'
						if (iconLeft && !iconRight) return '24px auto 0'
						if (!iconLeft && iconRight) return '0 auto 24px'
						return '24px auto 24px'
					},
				}}
			>
				{getIcon('left', iconLeft, props)}
				<ButtonText>{children}</ButtonText>
				{getIcon('right', iconRight, props)}
			</Styled.div>
		</Styled.div>
	)
}

export default Button
