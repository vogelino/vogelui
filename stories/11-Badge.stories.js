import React from 'react'
import { withTests } from '@storybook/addon-jest'
import results from '../.jest-test-results.json'
import { Table, TableRow, TableCell, TableHeaderCell } from '../src/components/Table'
import StoryWrapper from '../src/utils/storybookUtil'
import { Subhead } from '../src/components/Typography'
import Button from '../src/components/Button'
import Badge from '../src/components/Badge'

export default {
	title: 'Badge',
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
						<Badge variant="default" size="s" content={-120} />
					</TableCell>
					<TableCell>
						<Badge variant="default" size="m" content={-60} />
					</TableCell>
					<TableCell>
						<Badge variant="default" size="l" content={0} />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Primary</Subhead>
					</TableCell>
					<TableCell>
						<Badge variant="primary" size="s" content={32} />
					</TableCell>
					<TableCell>
						<Badge variant="primary" size="m" content={0} />
					</TableCell>
					<TableCell>
						<Badge variant="primary" size="l" content={120} />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Error</Subhead>
					</TableCell>

					<TableCell>
						<Badge variant="error" size="s" content={-120} />
					</TableCell>
					<TableCell>
						<Badge variant="error" size="m" content={-20} />
					</TableCell>
					<TableCell>
						<Badge variant="error" size="l" content={-12} />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Warning</Subhead>
					</TableCell>

					<TableCell>
						<Badge variant="warning" size="s" content={42.55} />
					</TableCell>
					<TableCell>
						<Badge variant="warning" size="m" content={-66.12} />
					</TableCell>
					<TableCell>
						<Badge variant="warning" size="l" content={99.99} />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Success</Subhead>
					</TableCell>

					<TableCell>
						<Badge variant="success" size="s" content={0} />
					</TableCell>
					<TableCell>
						<Badge variant="success" size="m" content={68} />
					</TableCell>
					<TableCell>
						<Badge variant="success" size="l" content={7} />
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)
variantsAndSizes.parameters = {
	jest: ['Badge.test.js'],
}

export const NumberBadgesAndDots = () => (
	<StoryWrapper>
		<Table>
			<tbody>
				<TableRow>
					<TableHeaderCell />
					<TableHeaderCell>
						<Subhead>With content</Subhead>
					</TableHeaderCell>
					<TableHeaderCell>
						<Subhead>As dot</Subhead>
					</TableHeaderCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Default</Subhead>
					</TableCell>
					<TableCell>
						<Badge content={0} />
					</TableCell>
					<TableCell>
						<Badge />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Error</Subhead>
					</TableCell>
					<TableCell>
						<Badge variant="error" content={10} />
					</TableCell>
					<TableCell>
						<Badge variant="error" />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Primary</Subhead>
					</TableCell>
					<TableCell>
						<Badge variant="primary" content={-20} />
					</TableCell>
					<TableCell>
						<Badge variant="primary" />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Warning</Subhead>
					</TableCell>
					<TableCell>
						<Badge variant="warning" content="Warning" />
					</TableCell>
					<TableCell>
						<Badge variant="warning" />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Success</Subhead>
					</TableCell>
					<TableCell>
						<Badge variant="success" content={-120} />
					</TableCell>
					<TableCell>
						<Badge variant="success" />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Custom</Subhead>
					</TableCell>
					<TableCell>
						<Badge color="#6e00ff" content={120} />
					</TableCell>
					<TableCell>
						<Badge color="#6e00ff" />
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)
NumberBadgesAndDots.parameters = {
	jest: ['Badge.test.js'],
}

export const AsSuperscript = () => (
	<StoryWrapper>
		<Table>
			<tbody>
				<TableRow>
					<TableHeaderCell />
					<TableHeaderCell>
						<Subhead>On element</Subhead>
					</TableHeaderCell>
					<TableHeaderCell>
						<Subhead>On text</Subhead>
					</TableHeaderCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Default</Subhead>
					</TableCell>
					<TableCell>
						<Badge content={0}>
							<Button>Button</Button>
						</Badge>
					</TableCell>
					<TableCell>
						<Badge dot>Content</Badge>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Error</Subhead>
					</TableCell>
					<TableCell>
						<Badge variant="error">
							<Button>Button</Button>
						</Badge>
					</TableCell>
					<TableCell>
						<Badge variant="error" content="NEW">
							Content
						</Badge>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Primary</Subhead>
					</TableCell>
					<TableCell>
						<Badge variant="primary" content={-20}>
							<Button>Button</Button>
						</Badge>
					</TableCell>
					<TableCell>
						<Badge variant="primary">Content</Badge>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Warning</Subhead>
					</TableCell>
					<TableCell>
						<Badge variant="warning">
							<Button>Button</Button>
						</Badge>
					</TableCell>
					<TableCell>
						<Badge variant="warning" content={12.3}>
							Content
						</Badge>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Success</Subhead>
					</TableCell>
					<TableCell>
						<Badge variant="success" content={-120}>
							<Button>Button</Button>
						</Badge>
					</TableCell>
					<TableCell>
						<Badge variant="success">Content</Badge>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Custom</Subhead>
					</TableCell>
					<TableCell>
						<Badge color="#6e00ff" content={120}>
							<Button>Button</Button>
						</Badge>
					</TableCell>
					<TableCell>
						<Badge color="#6e00ff">Content</Badge>
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)
AsSuperscript.parameters = {
	jest: ['Badge.test.js'],
}
