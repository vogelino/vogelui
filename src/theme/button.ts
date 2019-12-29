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

const buttonInteractiveProps = {
	boxShadow: 'inset 0 0 0 0 currentcolor',
	cursor: 'pointer',
	transition:
		'box-shadow 100ms ease-out, background 100ms ease-out, color 100ms ease-out, border-radius 100ms ease-out',
	'&:hover': {
		boxShadow: 'inset 0 0 0 1px currentcolor',
	},
	'&:focus': {
		boxShadow: 'inset 0 0 0 2px currentcolor',
	},
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
		...buttonInteractiveProps,
		backgroundColor: 'primaryUltraLight',
		color: 'primary',
		'&:active': {
			backgroundColor: 'primaryExtraLight',
		},
	},
	primary: {
		...buttonBaseProps,
		...buttonInteractiveProps,
		backgroundColor: 'primary',
		color: 'white',
		'&:hover': {
			...buttonInteractiveProps['&:hover'],
			backgroundColor: 'primaryUltraLight',
			color: 'primary',
		},
		'&:focus': {
			...buttonInteractiveProps['&:focus'],
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
		...buttonInteractiveProps,
		backgroundColor: 'success',
		color: 'white',
		'&:hover': {
			...buttonInteractiveProps['&:hover'],
			backgroundColor: 'successUltraLight',
			color: 'success',
		},
		'&:focus': {
			...buttonInteractiveProps['&:focus'],
			backgroundColor: 'successUltraLight',
			color: 'success',
		},
		'&:active': {
			backgroundColor: 'successExtraLight',
		},
	},
	error: {
		...buttonBaseProps,
		...buttonInteractiveProps,
		backgroundColor: 'error',
		color: 'white',
		'&:hover': {
			...buttonInteractiveProps['&:hover'],
			backgroundColor: 'errorUltraLight',
			color: 'error',
		},
		'&:focus': {
			...buttonInteractiveProps['&:focus'],
			backgroundColor: 'errorUltraLight',
			color: 'error',
		},
		'&:active': {
			backgroundColor: 'errorExtraLight',
		},
	},
	warning: {
		...buttonBaseProps,
		...buttonInteractiveProps,
		backgroundColor: 'warning',
		color: 'warningExtraDark',
		'&:hover': {
			...buttonInteractiveProps['&:hover'],
			backgroundColor: 'warningUltraLight',
			boxShadow: (theme): string => `inset 0 0 0 1px ${theme.colors.warning}`,
		},
		'&:focus': {
			...buttonInteractiveProps['&:focus'],
			backgroundColor: 'warningUltraLight',
			boxShadow: (theme): string => `inset 0 0 0 1px ${theme.colors.warning}`,
		},
		'&:active': {
			backgroundColor: 'warningExtraLight',
		},
	},
}
