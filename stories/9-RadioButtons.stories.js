import React from 'react'
import { Table, TableRow, TableCell } from '../src/components/Table'
import StoryWrapper from '../src/utils/storybookUtil'
import { Subhead } from '../src/components/Typography'
import RadioButton from '../src/components/RadioButton'

export default {
	title: 'Radio button',
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
						<RadioButton
							name="radio-story"
							label="Primary"
							variant="primary"
						/>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Disabled</Subhead>
					</TableCell>
					<TableCell>
						<RadioButton
							name="radio-story"
							label="Disabled"
							variant="disabled"
						/>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Error</Subhead>
					</TableCell>
					<TableCell>
						<RadioButton name="radio-story" label="Error" variant="error" />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Success</Subhead>
					</TableCell>
					<TableCell>
						<RadioButton
							name="radio-story"
							label="Success"
							variant="success"
						/>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Warning</Subhead>
					</TableCell>
					<TableCell>
						<RadioButton
							name="radio-story"
							label="Warning"
							variant="warning"
						/>
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)
