import styled from '@xstyled/styled-components'
import { th, variant } from '@xstyled/system'
import { css } from 'styled-components'

const getVariant = (variant: string): {} => css`
	background-color: ${th(`buttons.${variant}.background`)};
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

	&:active {
		background-color: ${th(`buttons.${variant}.active.background`)};
		color: ${th(`buttons.${variant}.active.color`)};
		border: ${th(`buttons.${variant}.active.border`)};
		box-shadow: ${th(`buttons.${variant}.active.boxShadow`)};
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
const Button = styled.button`
	border: none;
	${variants};
	${sizes};
	border-radius: ${th('buttons.radius')}px;
	cursor: pointer;
	outline: none;
`
export default Button
