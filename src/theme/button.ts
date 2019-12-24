const buttonBaseProps = {
	fontSize: 1,
	fontFamily: 'body',
	paddingLeft: 3,
	paddingRight: 3,
	paddingTop: 2,
	paddingBottom: 2,
	borderRadius: 4,
	borderWidth: 0,
	outline: 'none',
	boxSizing: 'border-box',
}

const buttonInteractiveProps = {
	boxShadow: 'inset 0 0 0 0 currentcolor',
	cursor: 'pointer',
	transition:
		'box-shadow 100ms ease-out, background 100ms ease-out, color 100ms ease-out',
	'&:hover': {
		boxShadow: 'inset 0 0 0 1px currentcolor',
	},
	'&:focus': {
		boxShadow: 'inset 0 0 0 2px currentcolor',
	},
}

export default {
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
		},
		'&:focus': {
			...buttonInteractiveProps['&:focus'],
			backgroundColor: 'warningUltraLight',
		},
		'&:active': {
			backgroundColor: 'warningExtraLight',
		},
	},
}
