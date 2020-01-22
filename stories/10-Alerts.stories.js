import React from 'react'
import { Table, TableRow, TableCell } from '../src/components/Table'
import StoryWrapper from '../src/utils/storybookUtil'
import { Subhead } from '../src/components/Typography'
import Alert from '../src/components/Alert'

export default {
	title: 'Alerts',
}

export const variants = () => (
	<StoryWrapper>
		<Table>
			<tbody>
				<TableRow>
					<TableCell>
						<Subhead>Default</Subhead>
					</TableCell>
					<TableCell>
						<Alert variant="default">{' Look! I am an alert!'}</Alert>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Primary</Subhead>
					</TableCell>
					<TableCell>
						<Alert variant="primary">{' Look! I am an alert!'}</Alert>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Error</Subhead>
					</TableCell>
					<TableCell>
						<Alert variant="error">{' Look! I am an alert!'}</Alert>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Success</Subhead>
					</TableCell>
					<TableCell>
						<Alert variant="success">{' Look! I am an alert!'}</Alert>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Warning</Subhead>
					</TableCell>
					<TableCell>
						<Alert variant="warning">{' Look! I am an alert!'}</Alert>
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)

export const differentProps = () => (
	<StoryWrapper>
		<Table>
			<tbody>
				<TableRow>
					<TableCell>
						<Subhead>With icon</Subhead>
					</TableCell>
					<TableCell>
						<Alert icon="cannabis">{' Look! I am an alert!'}</Alert>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Width title</Subhead>
					</TableCell>
					<TableCell>
						<Alert title="Hey!">{' Look! I am an alert!'}</Alert>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Width title &amp; icon</Subhead>
					</TableCell>
					<TableCell>
						<Alert title="Hey!" icon="cannabis">
							{' Look! I am an alert!'}
						</Alert>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Non dismissable</Subhead>
					</TableCell>
					<TableCell>
						<Alert dismissable={false}>{' Look! I am an alert!'}</Alert>
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)
