/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { ReactElement, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<{
	variant?: string
	as?: string
	sx?: {}
}>

const Button = ({
	children,
	sx = {},
	as = 'button',
	variant = 'default',
}: ButtonProps): ReactElement => (
	<Styled.div
		as={as}
		sx={{
			variant: `buttons.${variant}`,
			...sx,
		}}
	>
		{children}
	</Styled.div>
)

export default Button
