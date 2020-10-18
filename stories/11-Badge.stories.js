import React from 'react'
import { Table, TableRow, TableCell, TableHeaderCell } from '../src/components/Table'
import StoryWrapper from '../src/utils/storybookUtil'
import { Subhead } from '../src/components/Typography'
import Badge from '../src/components/Badge'

export default {
	title: 'Badge',
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
						<Badge variant="default" size="s">
							Badge
						</Badge>
					</TableCell>
					<TableCell>
						<Badge variant="default" size="m">
							Badge
						</Badge>
					</TableCell>
					<TableCell>
						<Badge variant="default" size="l">
							Badge
						</Badge>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Primary</Subhead>
					</TableCell>
					<TableCell>
						<Badge variant="primary" size="s">
							Badge
						</Badge>
					</TableCell>
					<TableCell>
						<Badge variant="primary" size="m">
							Badge
						</Badge>
					</TableCell>
					<TableCell>
						<Badge variant="primary" size="l">
							Badge
						</Badge>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Error</Subhead>
					</TableCell>

					<TableCell>
						<Badge variant="error" size="s">
							Badge
						</Badge>
					</TableCell>
					<TableCell>
						<Badge variant="error" size="m">
							Badge
						</Badge>
					</TableCell>
					<TableCell>
						<Badge variant="error" size="l">
							Badge
						</Badge>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Warning</Subhead>
					</TableCell>

					<TableCell>
						<Badge variant="warning" size="s">
							Badge
						</Badge>
					</TableCell>
					<TableCell>
						<Badge variant="warning" size="m">
							Badge
						</Badge>
					</TableCell>
					<TableCell>
						<Badge variant="warning" size="l">
							Badge
						</Badge>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Success</Subhead>
					</TableCell>

					<TableCell>
						<Badge variant="success" size="s">
							Badge
						</Badge>
					</TableCell>
					<TableCell>
						<Badge variant="success" size="m">
							Badge
						</Badge>
					</TableCell>
					<TableCell>
						<Badge variant="success" size="l">
							Badge
						</Badge>
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)
