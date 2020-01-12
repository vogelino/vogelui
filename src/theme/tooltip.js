import colors from './colors'
import { transparentize } from 'polished'

export default {
	backgroundColor: transparentize(0.15, colors.primaryExtraDark),
	color: 'white',
	fontSize: 'body',
	lineHeight: 'headline',
	transition: 'opacity 200ms ease-in-out',
	whiteSpace: 'nowrap',
	paddingTop: 1,
	paddingBottom: 1,
	paddingRight: 2,
	paddingLeft: 2,
	borderRadius: 3,
}
