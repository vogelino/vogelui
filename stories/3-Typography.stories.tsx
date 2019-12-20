import React, { ReactNode } from 'react'
import Typography from '../src/components/Typography'
import StoryWrapper from '../src/utils/storybookUtil'

export default {
	title: 'Typography',
}
export const variants = (): ReactNode => (
	<StoryWrapper>
		<Typography variant="hero">Hero</Typography>
		<Typography variant="h1">H1</Typography>
		<Typography variant="h2">H2</Typography>
		<Typography variant="h3">H3</Typography>
		<Typography variant="subhead">Subhead</Typography>
		<Typography variant="body">Body</Typography>
		<Typography variant="emphasis">Emphasis</Typography>
		<Typography variant="footnote">Footnote</Typography>
		<Typography variant="caption">Caption</Typography>
	</StoryWrapper>
)
