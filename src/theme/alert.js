const getAlertVariantStyle = (variant) => ({
	color: `${variant}Dark`,
	backgroundColor: `${variant}UltraLight`,
	borderColor: variant,
})

export default {
	common: {
		paddingTop: 4,
		paddingBottom: 4,
		paddingRight: 5,
		paddingLeft: 5,
		backgroundColor: 'greyExtraLight',
		borderRadius: 4,
		border: '1px solid',
	},
	primary: getAlertVariantStyle('primary'),
	error: getAlertVariantStyle('error'),
	success: getAlertVariantStyle('success'),
	warning: getAlertVariantStyle('warning'),
}
