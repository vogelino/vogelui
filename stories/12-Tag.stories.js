import React from 'react'
import { withTests } from '@storybook/addon-jest'
import results from '../.jest-test-results.json'
import { Table, TableRow, TableCell, TableHeaderCell } from '../src/components/Table'
import StoryWrapper from '../src/utils/storybookUtil'
import { Subhead } from '../src/components/Typography'
import Tag from '../src/components/Tag'

export default {
	title: 'Tag',
	decorators: [withTests({ results })],
}

export const variantsAndSizes = () => (
	<StoryWrapper>
		<Table>
			<tbody>
				<TableRow>
					<TableHeaderCell />
					<TableHeaderCell>
						<Subhead>Small</Subhead>
					</TableHeaderCell>
					<TableHeaderCell>
						<Subhead>Medium</Subhead>
					</TableHeaderCell>
					<TableHeaderCell>
						<Subhead>Large</Subhead>
					</TableHeaderCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Default</Subhead>
					</TableCell>
					<TableCell>
						<Tag variant="default" size="s">
							Content
						</Tag>
					</TableCell>
					<TableCell>
						<Tag variant="default" size="m">
							Content
						</Tag>
					</TableCell>
					<TableCell>
						<Tag variant="default" size="l">
							Content
						</Tag>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Primary</Subhead>
					</TableCell>
					<TableCell>
						<Tag variant="primary" size="s">
							Content
						</Tag>
					</TableCell>
					<TableCell>
						<Tag variant="primary" size="m">
							Content
						</Tag>
					</TableCell>
					<TableCell>
						<Tag variant="primary" size="l">
							Content
						</Tag>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Error</Subhead>
					</TableCell>

					<TableCell>
						<Tag variant="error" size="s">
							Content
						</Tag>
					</TableCell>
					<TableCell>
						<Tag variant="error" size="m">
							Content
						</Tag>
					</TableCell>
					<TableCell>
						<Tag variant="error" size="l">
							Content
						</Tag>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Warning</Subhead>
					</TableCell>

					<TableCell>
						<Tag variant="warning" size="s">
							Content
						</Tag>
					</TableCell>
					<TableCell>
						<Tag variant="warning" size="m">
							Content
						</Tag>
					</TableCell>
					<TableCell>
						<Tag variant="warning" size="l">
							Content
						</Tag>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Success</Subhead>
					</TableCell>

					<TableCell>
						<Tag variant="success" size="s">
							Content
						</Tag>
					</TableCell>
					<TableCell>
						<Tag variant="success" size="m">
							Content
						</Tag>
					</TableCell>
					<TableCell>
						<Tag variant="success" size="l">
							Content
						</Tag>
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)
variantsAndSizes.parameters = {
	jest: ['Tag.test.js'],
}

export const dismissable = () => (
	<StoryWrapper>
		<Table>
			<tbody>
				<TableRow>
					<TableHeaderCell />
					<TableHeaderCell>
						<Subhead>Small</Subhead>
					</TableHeaderCell>
					<TableHeaderCell>
						<Subhead>Medium</Subhead>
					</TableHeaderCell>
					<TableHeaderCell>
						<Subhead>Large</Subhead>
					</TableHeaderCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Default</Subhead>
					</TableCell>
					<TableCell>
						<Tag dismissable variant="default" size="s">
							Content
						</Tag>
					</TableCell>
					<TableCell>
						<Tag dismissable variant="default" size="m">
							Content
						</Tag>
					</TableCell>
					<TableCell>
						<Tag dismissable variant="default" size="l">
							Content
						</Tag>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Primary</Subhead>
					</TableCell>
					<TableCell>
						<Tag dismissable variant="primary" size="s">
							Content
						</Tag>
					</TableCell>
					<TableCell>
						<Tag dismissable variant="primary" size="m">
							Content
						</Tag>
					</TableCell>
					<TableCell>
						<Tag dismissable variant="primary" size="l">
							Content
						</Tag>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Error</Subhead>
					</TableCell>

					<TableCell>
						<Tag dismissable variant="error" size="s">
							Content
						</Tag>
					</TableCell>
					<TableCell>
						<Tag dismissable variant="error" size="m">
							Content
						</Tag>
					</TableCell>
					<TableCell>
						<Tag dismissable variant="error" size="l">
							Content
						</Tag>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Warning</Subhead>
					</TableCell>

					<TableCell>
						<Tag dismissable variant="warning" size="s">
							Content
						</Tag>
					</TableCell>
					<TableCell>
						<Tag dismissable variant="warning" size="m">
							Content
						</Tag>
					</TableCell>
					<TableCell>
						<Tag dismissable variant="warning" size="l">
							Content
						</Tag>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Success</Subhead>
					</TableCell>

					<TableCell>
						<Tag dismissable variant="success" size="s">
							Content
						</Tag>
					</TableCell>
					<TableCell>
						<Tag dismissable variant="success" size="m">
							Content
						</Tag>
					</TableCell>
					<TableCell>
						<Tag dismissable variant="success" size="l">
							Content
						</Tag>
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)
dismissable.parameters = {
	jest: ['Tag.test.js'],
}
