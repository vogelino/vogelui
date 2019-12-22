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
import { Table, TableRow, TableCell } from '../src/components/Table'
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
		<Table sx={{ borderSpacing: 24 }}>
			<TableRow>
				<TableCell>
					<Label>Hero title</Label>
				</TableCell>
				<TableCell>
					<HeroTitle>How to Tip at the Holidays?</HeroTitle>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					<Label>H1</Label>
				</TableCell>
				<TableCell>
					<H1>
						Twitter and Facebook Want to Shift Power to Users. Or Do They?
					</H1>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					<Label>H2</Label>
				</TableCell>
				<TableCell>
					<H2>When the Surgeon Is a Mom</H2>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					<Label>H3</Label>
				</TableCell>
				<TableCell>
					<H3>
						New York Progressives Meet Immovable Object: a $6 Billion Budget
						Gap
					</H3>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					<Label>Body</Label>
				</TableCell>
				<TableCell>
					<Body>
						Sarah Huckabee Sanders Apologizes for Mocking Biden’s Remarks on
						Stuttering
					</Body>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					<Label>Emphasis</Label>
				</TableCell>
				<TableCell>
					<Emphasis>
						U.K. Parliament Advances Brexit Bill, All but Assuring January
						Exit
					</Emphasis>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					<Label>Subhead</Label>
				</TableCell>
				<TableCell>
					<Subhead>In Other News</Subhead>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					<Label>Footnote</Label>
				</TableCell>
				<TableCell>
					<Footnote>New York ✢ 2h ago</Footnote>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					<Label>Caption</Label>
				</TableCell>
				<TableCell>
					<Caption>William Widmer for The New York Times</Caption>
				</TableCell>
			</TableRow>
		</Table>
	</StoryWrapper>
)
