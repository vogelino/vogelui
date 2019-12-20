import React, { ReactNode } from 'react'
import Typography from '../src/components/Typography'
import StoryWrapper from '../src/utils/storybookUtil'

export default {
	title: 'Typography',
}
export const variants = (): ReactNode => (
	<StoryWrapper>
		<Typography variant="hero">The lazy fox jumps over the crazy dog</Typography>
		<Typography variant="h1">The lazy fox jumps over the crazy dog</Typography>
		<Typography variant="h2">The lazy fox jumps over the crazy dog</Typography>
		<Typography variant="h3">The lazy fox jumps over the crazy dog</Typography>
		<Typography variant="subhead">The lazy fox jumps over the crazy dog</Typography>
		<Typography variant="body">The lazy fox jumps over the crazy dog</Typography>
		<Typography variant="emphasis">The lazy fox jumps over the crazy dog</Typography>
		<Typography variant="footnote">The lazy fox jumps over the crazy dog</Typography>
		<Typography variant="caption">The lazy fox jumps over the crazy dog</Typography>
	</StoryWrapper>
)
