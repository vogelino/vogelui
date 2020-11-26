import React from 'react'
import { withTests } from '@storybook/addon-jest'
import results from '../.jest-test-results.json'
import { Table, TableRow, TableCell } from '../src/components/Table'
import StoryWrapper from '../src/utils/storybookUtil'
import { Subhead } from '../src/components/Typography'
import Alert from '../src/components/Alert'
import { motion } from 'framer-motion'

export default {
	title: 'Alerts',
	decorators: [withTests({ results })],
}

export const variants = () => (
	<StoryWrapper>
		<Table>
			<motion.tbody>
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
			</motion.tbody>
		</Table>
	</StoryWrapper>
)
variants.parameters = {
	jest: ['Alert.test.js'],
}

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
differentProps.parameters = {
	jest: ['Alert.test.js'],
}
