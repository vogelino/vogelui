import React, { ReactNode } from 'react'
import Button from '../src/components/Button'
import { Table, TableRow, TableCell } from '../src/components/Table'
import StoryWrapper from '../src/utils/storybookUtil'
import { Subhead } from '../src/components/Typography'

export default {
	title: 'Buttons',
}

export const variants = (): ReactNode => (
	<StoryWrapper>
		<Table>
			<tbody>
				<TableRow>
					<TableCell>
						<Subhead>Default</Subhead>
					</TableCell>
					<TableCell>
						<Button>Click me</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Primary</Subhead>
					</TableCell>
					<TableCell>
						<Button variant="primary">Click me</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Disabled</Subhead>
					</TableCell>
					<TableCell>
						<Button variant="disabled">Click me</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Success</Subhead>
					</TableCell>
					<TableCell>
						<Button variant="success">Click me</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Error</Subhead>
					</TableCell>
					<TableCell>
						<Button variant="error">Click me</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Warning</Subhead>
					</TableCell>
					<TableCell>
						<Button variant="warning">Click me</Button>
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)
