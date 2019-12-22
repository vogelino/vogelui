import React, { ReactNode, PropsWithChildren, ReactElement } from 'react'
import {
	HeroTitle,
	H1,
	H2,
	H3,
	Body,
	Emphasis,
	Subhead,
	Caption,
	Footnote,
} from '../src/components/Typography'
import StoryWrapper from '../src/utils/storybookUtil'

export default {
	title: 'Typography',
}

const Label = ({ children }: PropsWithChildren<{}>): ReactElement => (
	<Subhead mb={0} color="disabled">
		{children}
	</Subhead>
)

export const variants = (): ReactNode => (
	<StoryWrapper>
		<div>
			<Label>Hero title</Label>
			<HeroTitle>How to Tip at the Holidays?</HeroTitle>

			<Label>H1</Label>
			<H1>Twitter and Facebook Want to Shift Power to Users. Or Do They?</H1>

			<Label>H2</Label>
			<H2>When the Surgeon Is a Mom</H2>

			<Label>H3</Label>
			<H3>New York Progressives Meet Immovable Object: a $6 Billion Budget Gap</H3>

			<Label>Body</Label>
			<Body>
				Sarah Huckabee Sanders Apologizes for Mocking Biden’s Remarks on
				Stuttering
			</Body>

			<Label>Emphasis</Label>
			<Emphasis>
				U.K. Parliament Advances Brexit Bill, All but Assuring January Exit
			</Emphasis>

			<Label>Subhead</Label>
			<Subhead>In Other News</Subhead>

			<Label>Footnote</Label>
			<Footnote>New York ✢ 2h ago</Footnote>

			<Label>Caption</Label>
			<Caption>William Widmer for The New York Times</Caption>
		</div>
	</StoryWrapper>
)
