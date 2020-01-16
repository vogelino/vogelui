import colors from './colors'
import { transparentize } from 'polished'

export default {
	fontSize: 'body',
	lineHeight: 'headline',
	transition: 'opacity 200ms ease-in-out',
	whiteSpace: 'nowrap',
	paddingTop: 1,
	paddingBottom: 1,
	paddingRight: 2,
	paddingLeft: 2,
	borderRadius: 3,
	variants: {
		dark: {
			backgroundColor: transparentize(0.3, colors.primaryExtraDark),
			color: colors.white,
		},
		light: {
			backgroundColor: transparentize(0.3, colors.white),
			color: colors.black,
		},
	},
}
