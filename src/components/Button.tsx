/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { ReactElement, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<{
	variant?: 'default' | 'primary' | 'success' | 'error' | 'warning' | 'disabled'
	as?: string
	size?: 's' | 'm' | 'l'
	sx?: {}
}>

const Button = ({
	children,
	sx = {},
	as = 'button',
	size = 'm',
	variant = 'default',
}: ButtonProps): ReactElement => (
	<Styled.div
		as={as}
		sx={{
			variant: [`buttons.${variant}`, `buttons.sizes.${size}`],
			...sx,
		}}
		disabled={variant === 'disabled'}
	>
		{children}
	</Styled.div>
)

export default Button
