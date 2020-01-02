import React, { ReactNode } from 'react'
import Input from '../src/components/Input'
import { Table, TableRow, TableCell, TableHeaderCell } from '../src/components/Table'
import StoryWrapper from '../src/utils/storybookUtil'
import { Subhead } from '../src/components/Typography'

export default {
	title: 'Inputs',
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
						<Input size="s" initialValue="With value" />
					</TableCell>
					<TableCell>
						<Input size="m" initialValue="With value" />
					</TableCell>
					<TableCell>
						<Input size="l" placeholder="Custom" />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Primary</Subhead>
					</TableCell>
					<TableCell>
						<Input size="s" variant="primary" initialValue="With value" />
					</TableCell>
					<TableCell>
						<Input size="m" variant="primary" />
					</TableCell>
					<TableCell>
						<Input size="l" variant="primary" placeholder="Custom" />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Disabled</Subhead>
					</TableCell>
					<TableCell>
						<Input size="s" variant="disabled" initialValue="With value" />
					</TableCell>
					<TableCell>
						<Input size="m" variant="disabled" />
					</TableCell>
					<TableCell>
						<Input size="l" variant="disabled" placeholder="Custom" />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Success</Subhead>
					</TableCell>
					<TableCell>
						<Input size="s" variant="success" initialValue="With value" />
					</TableCell>
					<TableCell>
						<Input size="m" variant="success" />
					</TableCell>
					<TableCell>
						<Input size="l" variant="success" placeholder="Custom" />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Error</Subhead>
					</TableCell>
					<TableCell>
						<Input size="s" variant="error" initialValue="With value" />
					</TableCell>
					<TableCell>
						<Input size="m" variant="error" />
					</TableCell>
					<TableCell>
						<Input size="l" variant="error" placeholder="Custom" />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Warning</Subhead>
					</TableCell>
					<TableCell>
						<Input size="s" variant="warning" initialValue="With value" />
					</TableCell>
					<TableCell>
						<Input size="m" variant="warning" />
					</TableCell>
					<TableCell>
						<Input size="l" variant="warning" placeholder="Custom" />
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)
