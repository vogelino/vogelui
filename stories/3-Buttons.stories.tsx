import React, { ReactNode } from 'react'
import Button from '../src/components/Button'
import { Table, TableRow, TableCell, TableHeaderCell } from '../src/components/Table'
import StoryWrapper from '../src/utils/storybookUtil'
import { Subhead } from '../src/components/Typography'

export default {
	title: 'Buttons',
}

export const variants = (): ReactNode => (
	<StoryWrapper>
		<Table>
			<thead>
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
			</thead>
			<tbody>
				<TableRow>
					<TableCell>
						<Subhead>Default</Subhead>
					</TableCell>
					<TableCell>
						<Button size="s">Click me</Button>
					</TableCell>
					<TableCell>
						<Button size="m">Click me</Button>
					</TableCell>
					<TableCell>
						<Button size="l">Click me</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Primary</Subhead>
					</TableCell>
					<TableCell>
						<Button size="s" variant="primary">
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button size="m" variant="primary">
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button size="l" variant="primary">
							Click me
						</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Disabled</Subhead>
					</TableCell>
					<TableCell>
						<Button size="s" variant="disabled">
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button size="m" variant="disabled">
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button size="l" variant="disabled">
							Click me
						</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Success</Subhead>
					</TableCell>
					<TableCell>
						<Button size="s" variant="success">
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button size="m" variant="success">
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button size="l" variant="success">
							Click me
						</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Error</Subhead>
					</TableCell>
					<TableCell>
						<Button size="s" variant="error">
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button size="m" variant="error">
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button size="l" variant="error">
							Click me
						</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Warning</Subhead>
					</TableCell>
					<TableCell>
						<Button size="s" variant="warning">
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button size="m" variant="warning">
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button size="l" variant="warning">
							Click me
						</Button>
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)
