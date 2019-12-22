import React, { ReactNode } from 'react'
import Typography from '../src/components/Typography'
import StoryWrapper from '../src/utils/storybookUtil'

export default {
	title: 'Typography',
}

export const variants = (): ReactNode => (
	<StoryWrapper>
		<div>
			<Typography mb={0} color="disabled" variant="subhead">
				Hero title
			</Typography>
			<Typography mb={0} color="primary" variant="hero">
				How to Tip at the Holidays?
			</Typography>
			<Typography mb={0} color="disabled" variant="subhead">
				H1
			</Typography>
			<Typography mb={0} variant="h1">
				Twitter and Facebook Want to Shift Power to Users. Or Do They?
			</Typography>
			<Typography mb={0} color="disabled" variant="subhead">
				H2
			</Typography>
			<Typography mb={0} variant="h2">
				When the Surgeon Is a Mom
			</Typography>
			<Typography mb={0} color="disabled" variant="subhead">
				H3
			</Typography>
			<Typography mb={0} variant="h3">
				New York Progressives Meet Immovable Object: a $6 Billion Budget Gap
			</Typography>

			<Typography mb={0} color="disabled" variant="subhead">
				Body
			</Typography>
			<Typography mb={0} variant="body">
				Sarah Huckabee Sanders Apologizes for Mocking Biden’s Remarks on
				Stuttering
			</Typography>
			<Typography mb={0} color="disabled" variant="subhead">
				Emphasis
			</Typography>
			<Typography mb={0} variant="emphasis">
				U.K. Parliament Advances Brexit Bill, All but Assuring January Exit
			</Typography>
			<Typography mb={0} color="disabled" variant="subhead">
				Sbuhead
			</Typography>
			<Typography mb={0} variant="subhead">
				In Other News
			</Typography>

			<Typography mb={0} color="disabled" variant="subhead">
				Footnote
			</Typography>
			<Typography mb={0} variant="footnote">
				New York ✢ 2h ago
			</Typography>

			<Typography mb={0} color="disabled" variant="subhead">
				Caption
			</Typography>
			<Typography mb={0} variant="caption">
				William Widmer for The New York Times
			</Typography>
		</div>
	</StoryWrapper>
)
