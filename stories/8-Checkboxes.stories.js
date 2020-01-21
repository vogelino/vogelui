import React from 'react'
import { Table, TableRow, TableCell } from '../src/components/Table'
import StoryWrapper from '../src/utils/storybookUtil'
import { Subhead } from '../src/components/Typography'
import Checkbox from '../src/components/Checkbox'

export default {
	title: 'Checkboxes',
}

export const variants = () => (
	<StoryWrapper>
		<Table>
			<tbody>
				<TableRow>
					<TableCell>
						<Subhead>Primary</Subhead>
					</TableCell>
					<TableCell>
						<Checkbox label="Primary" defaultChecked variant="primary" />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Disabled</Subhead>
					</TableCell>
					<TableCell>
						<Checkbox label="Disabled" defaultChecked variant="disabled" />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Error</Subhead>
					</TableCell>
					<TableCell>
						<Checkbox label="Error" defaultChecked variant="error" />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Success</Subhead>
					</TableCell>
					<TableCell>
						<Checkbox label="Success" variant="success" />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Warning</Subhead>
					</TableCell>
					<TableCell>
						<Checkbox label="Warning" variant="warning" />
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)
