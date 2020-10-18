const getBadgeVariantStyle = (variant) => ({
	color: `${variant}Dark`,
	backgroundColor: `${variant}UltraLight`,
	borderColor: `${variant}ExtraLight`,
})

export default {
	sizes: {
		s: {
			fontSize: 0,
			lineHeight: '1em',
			paddingLeft: 2,
			paddingRight: 2,
			paddingTop: 1,
			paddingBottom: 1,
			textTransform: 'uppercase',
		},
		m: {
			fontSize: 1,
			lineHeight: '1em',
			paddingLeft: 3,
			paddingRight: 3,
			paddingTop: 1,
			paddingBottom: 1,
		},
		l: {
			fontSize: 2,
			lineHeight: '1em',
			paddingLeft: 5,
			paddingRight: 5,
			paddingTop: 4,
			paddingBottom: 4,
		},
	},
	common: {
		backgroundColor: 'greyUltraLight',
		borderRadius: 40,
		border: '1px solid',
		letterSpacing: '0.02em',
		display: 'inline-block',
	},
	default: {
		...getBadgeVariantStyle('grey'),
		color: 'greyExtraDark',
	},
	primary: getBadgeVariantStyle('primary'),
	error: getBadgeVariantStyle('error'),
	success: getBadgeVariantStyle('success'),
	warning: getBadgeVariantStyle('warning'),
}
