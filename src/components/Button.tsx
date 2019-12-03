import styled from '@xstyled/styled-components'
import { th, variant } from '@xstyled/system'
import { css } from 'styled-components'
import { transparentize as alpha } from 'polished'

const getAlphaVariant = (variant: string, alphaValue: number): {} => (p: {}): string =>
	alpha(alphaValue, th(`buttons.${variant}.background`)(p))

const getVariant = (variant: string): {} => css`
	background-color: ${th(`buttons.${variant}.background`)};
	color: ${th(`buttons.${variant}.color`)};
	border: ${th(`buttons.${variant}.border`)};
	transition: all 200ms ease-out;
	box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4), 0 0 0 0 ${getAlphaVariant(variant, 0)};

	&:focus {
		box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4),
			0 0 0 ${th.space(1)} ${getAlphaVariant(variant, 0.6)};
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
	border-radius: ${th.radius(2)};
	cursor: pointer;
	outline: none;
`
export default Button
