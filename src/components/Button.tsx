import React, { ReactNode, FunctionComponent, ReactElement } from 'react'
import styled from '@xstyled/styled-components'
import { th, variant } from '@xstyled/system'
import { css, withTheme } from 'styled-components'
import Ripples from 'react-ripples'
import { Theme } from '../theme'

const getVariant = (variant: string): {} => css`
	background: ${th(`buttons.${variant}.background`)};
	color: ${th(`buttons.${variant}.color`)};
	border: ${th(`buttons.${variant}.border`)};
	transition: ${th(`buttons.${variant}.transition`)};
	box-shadow: ${th(`buttons.${variant}.boxShadow`)};

	&:focus {
		background-color: ${th(`buttons.${variant}.focus.background`)};
		color: ${th(`buttons.${variant}.focus.color`)};
		border: ${th(`buttons.${variant}.focus.border`)};
		box-shadow: ${th(`buttons.${variant}.focus.boxShadow`)};
	}

	&:hover {
		background-color: ${th(`buttons.${variant}.hover.background`)};
		color: ${th(`buttons.${variant}.hover.color`)};
		border: ${th(`buttons.${variant}.hover.border`)};
		box-shadow: ${th(`buttons.${variant}.hover.boxShadow`)};
	}
`

const colorsVariants = ['primary', 'success', 'warning', 'error', 'basic'].reduce(
	(acc, variant: string) => ({
		...acc,
		[variant]: getVariant(variant),
	}),
	{},
)

const variants = variant({
	prop: 'variant',
	default: 'basic',
	variants: colorsVariants,
})

const sm = css`
	padding: ${th.space(1)} ${th.space(2)};
	font-size: ${th.fontSize(1)};
`
const md = css`
	padding: ${th.space(2)} ${th.space(3)};
	font-size: ${th.fontSize(2)};
`
const xl = css`
	padding: ${th.space(3)} ${th.space(4)};
	font-size: ${th.fontSize(3)};
`

const sizes = variant({
	prop: 'size',
	default: 'md',
	variants: { sm, md, xl },
})

const left = css`
	text-align: left;
`

const center = css`
	text-align: center;
`

const right = css`
	text-align: right;
`

const alignments = variant({
	prop: 'alignment',
	default: 'center',
	variants: { left, center, right },
})

const ButtonWrapper = styled.spanBox`
	border-radius: ${th('buttons.radius')}px;
	overflow: hidden;
	padding: 0px;

	.react-ripples {
		width: 100%;
	}
`

const ButtonEl = styled.button`
	width: 100%;
	border: none;
	${variants};
	${sizes};
	${alignments};
	border-radius: ${th('buttons.radius')}px;
	cursor: pointer;
	outline: none;
`

type ButtonProps = {
	variant?: 'primary' | 'success' | 'warning' | 'error' | 'basic'
	alignment?: 'left' | 'center' | 'right'
	children?: ReactNode | ReactElement
	mx?: number
	my?: number
	mb?: number
	mr?: number
	mt?: number
	ml?: number
	size?: 'sm' | 'md' | 'xl'
	theme: Theme
}

const Button: FunctionComponent<ButtonProps> = ({
	children,
	theme,
	mx = 0,
	my = 0,
	mb = 0,
	mr = 0,
	mt = 0,
	ml = 0,
	variant = 'basic',
	alignment = 'center',
	...otherProps
}: ButtonProps) => (
	<ButtonWrapper mx={mx} my={my} mb={mb} mr={mr} mt={mt} ml={ml}>
		<Ripples color={theme.buttons[variant].ripple}>
			<ButtonEl
				{...otherProps}
				theme={theme}
				variant={variant}
				alignment={alignment}
			>
				{children}
			</ButtonEl>
		</Ripples>
	</ButtonWrapper>
)

export default withTheme(Button)
