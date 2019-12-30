import colors from './colors'
import { transparentize } from 'polished'

const buttonBaseProps = {
	borderRadius: 4,
	borderWidth: 0,
	outline: 'none',
	boxSizing: 'border-box',
	fontFamily: 'body',
	letterSpacing: '0.01em',
	userSelect: 'none',
	display: 'inline-block',
}

const buttonInteractiveProps = (color: string): {} => {
	const col = colors[color]
	const transCol0 = transparentize(0, col)
	const transColFocus = transparentize(0.7, col)
	return {
		boxShadow: `inset 0 0 0 0 ${col}, 0 0 0 0 ${transCol0}`,
		cursor: `pointer`,
		transition: `box-shadow 100ms ease-out, background 100ms ease-out, color 100ms ease-out, border-radius 100ms ease-out`,
		'&:hover': {
			boxShadow: `inset 0 0 0 1px ${col}, 0 0 0 0 ${transCol0}`,
		},
		'&:focus': {
			boxShadow: `inset 0 0 0 1px ${col}, 0 0 0 3px ${transColFocus}`,
		},
	}
}

export default {
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
	default: {
		...buttonBaseProps,
		...buttonInteractiveProps('primary'),
		backgroundColor: 'primaryUltraLight',
		color: 'primary',
		'&:active': {
			backgroundColor: 'primaryExtraLight',
		},
	},
	primary: {
		...buttonBaseProps,
		...buttonInteractiveProps('primary'),
		backgroundColor: 'primary',
		color: 'white',
		'&:hover': {
			...buttonInteractiveProps('primary')['&:hover'],
			backgroundColor: 'primaryUltraLight',
			color: 'primary',
		},
		'&:focus': {
			...buttonInteractiveProps('primary')['&:focus'],
			backgroundColor: 'primaryUltraLight',
			color: 'primary',
		},
		'&:active': {
			backgroundColor: 'primaryExtraLight',
		},
	},
	disabled: {
		...buttonBaseProps,
		backgroundColor: 'greyUltraLight',
		color: 'greyLight',
	},
	success: {
		...buttonBaseProps,
		...buttonInteractiveProps('success'),
		backgroundColor: 'success',
		color: 'white',
		'&:hover': {
			...buttonInteractiveProps('success')['&:hover'],
			backgroundColor: 'successUltraLight',
			color: 'success',
		},
		'&:focus': {
			...buttonInteractiveProps('success')['&:focus'],
			backgroundColor: 'successUltraLight',
			color: 'success',
		},
		'&:active': {
			backgroundColor: 'successExtraLight',
		},
	},
	error: {
		...buttonBaseProps,
		...buttonInteractiveProps('error'),
		backgroundColor: 'error',
		color: 'white',
		'&:hover': {
			...buttonInteractiveProps('error')['&:hover'],
			backgroundColor: 'errorUltraLight',
			color: 'error',
		},
		'&:focus': {
			...buttonInteractiveProps('error')['&:focus'],
			backgroundColor: 'errorUltraLight',
			color: 'error',
		},
		'&:active': {
			backgroundColor: 'errorExtraLight',
		},
	},
	warning: {
		...buttonBaseProps,
		...buttonInteractiveProps('warning'),
		backgroundColor: 'warning',
		color: 'warningExtraDark',
		'&:hover': {
			...buttonInteractiveProps('warning')['&:hover'],
			backgroundColor: 'warningUltraLight',
			boxShadow: (theme): string => `inset 0 0 0 1px ${theme.colors.warning}`,
		},
		'&:focus': {
			...buttonInteractiveProps('warning')['&:focus'],
			backgroundColor: 'warningUltraLight',
		},
		'&:active': {
			backgroundColor: 'warningExtraLight',
		},
	},
}
