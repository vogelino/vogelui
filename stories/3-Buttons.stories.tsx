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

export const sizesAndAlignments = (): ReactNode => (
	<StoryWrapper>
		<Table>
			<thead>
				<TableRow>
					<TableHeaderCell />
					<TableHeaderCell>
						<Subhead>Left</Subhead>
					</TableHeaderCell>
					<TableHeaderCell>
						<Subhead>Center</Subhead>
					</TableHeaderCell>
					<TableHeaderCell>
						<Subhead>Right</Subhead>
					</TableHeaderCell>
				</TableRow>
			</thead>
			<tbody>
				<TableRow>
					<TableCell>
						<Subhead>Small</Subhead>
					</TableCell>
					<TableCell>
						<Button size="s" width={200} align="left" iconLeft="yes">
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button size="s" width={200} align="center" iconLeft="yes">
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button size="s" width={200} align="right" iconLeft="yes">
							Click me
						</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Medium</Subhead>
					</TableCell>
					<TableCell>
						<Button size="m" width={200} align="left" iconRight="yes">
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button size="m" width={200} align="center" iconRight="yes">
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button size="m" width={200} align="right" iconRight="yes">
							Click me
						</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Large</Subhead>
					</TableCell>
					<TableCell>
						<Button
							size="l"
							width={200}
							align="left"
							iconRight="yes"
							iconLeft="yes"
						>
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button
							size="l"
							width={200}
							align="center"
							iconRight="yes"
							iconLeft="yes"
						>
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button
							size="l"
							width={200}
							align="right"
							iconRight="yes"
							iconLeft="yes"
						>
							Click me
						</Button>
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)
