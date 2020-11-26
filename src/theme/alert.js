const getAlertVariantStyle = (variant) => ({
	color: `${variant}Dark`,
	backgroundColor: `${variant}UltraLight`,
	borderColor: `${variant}ExtraLight`,
})

export default {
	common: {
		paddingTop: 4,
		paddingBottom: 4,
		paddingRight: 8,
		paddingLeft: 5,
		backgroundColor: 'greyUltraLight',
		borderRadius: 4,
		border: '1px solid',
		boxSizing: 'border-box',
	},
	default: {
		...getAlertVariantStyle('grey'),
		color: 'greyExtraDark',
	},
	primary: getAlertVariantStyle('primary'),
	error: getAlertVariantStyle('error'),
	success: getAlertVariantStyle('success'),
	warning: getAlertVariantStyle('warning'),
}
