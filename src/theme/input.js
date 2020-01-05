import { transparentize } from 'polished'
import PropTypes from 'prop-types'
import colors from './colors'

const inputBaseProps = {
	borderRadius: 4,
	border: '1px solid',
	outline: 'none',
	boxSizing: 'border-box',
	fontFamily: 'body',
	lineHeight: 'body',
	letterSpacing: '0.01em',
	userSelect: 'none',
	display: 'inline-block',
}

const inputInteractiveProps = (color) => {
	const col = colors[color]
	const transCol0 = transparentize(0, col)
	const transColFocus = transparentize(0.7, col)
	return {
		boxShadow: `inset 0 0 0 0 ${col}, 0 0 0 0 ${transCol0}`,
		transition: `box-shadow 100ms ease-out, background 100ms ease-out, color 100ms ease-out, border-radius 100ms ease-out`,
		'&:hover': {
			boxShadow: `inset 0 0 0 1px ${col}, 0 0 0 0 ${transCol0}`,
			borderColor: col,
		},
		'&:focus': {
			boxShadow: `inset 0 0 0 1px ${col}, 0 0 0 3px ${transColFocus}`,
			borderColor: col,
		},
		'&::placeholder': {
			color: 'greyExtraLight',
		},
		'&::selection': {
			backgroundColor: transColFocus,
		},
	}
}

const defaultInput = {
	...inputBaseProps,
	borderColor: 'greyExtraLight',
	...inputInteractiveProps('primary'),
}

const inputs = {
	sizes: {
		s: {
			fontSize: 1,
			lineHeight: '1em',
			paddingLeft: 3,
			paddingRight: 3,
			paddingTop: 2,
			paddingBottom: 2,
		},
		m: {
			fontSize: 2,
			lineHeight: '1em',
			paddingLeft: 4,
			paddingRight: 4,
			paddingTop: 3,
			paddingBottom: 3,
		},
		l: {
			fontSize: 3,
			lineHeight: '1em',
			paddingLeft: 5,
			paddingRight: 5,
			paddingTop: 4,
			paddingBottom: 4,
		},
	},
	default: defaultInput,
	primary: defaultInput,
	disabled: {
		...inputBaseProps,
		borderColor: 'greyExtraLight',
		backgroundColor: 'greyUltraLight',
		color: 'greyLight',
		cursor: 'not-allowed',
		'&::placeholder': {
			color: 'greyLight',
		},
	},
	success: {
		...inputBaseProps,
		borderColor: 'success',
		...inputInteractiveProps('success'),
	},
	error: { ...inputBaseProps, borderColor: 'error', ...inputInteractiveProps('error') },
	warning: {
		...inputBaseProps,
		borderColor: 'warning',
		...inputInteractiveProps('warning'),
	},
}

export default inputs

export const inputSizeProp = PropTypes.oneOf(Object.keys(inputs.sizes))
const variants = { ...inputs }
delete variants.sizes
export const inputVariantProp = PropTypes.oneOf(Object.keys(variants))
