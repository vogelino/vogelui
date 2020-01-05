import React from 'react'
import Input from '../src/components/Input'
import { Table, TableRow, TableCell, TableHeaderCell } from '../src/components/Table'
import StoryWrapper from '../src/utils/storybookUtil'
import { Subhead } from '../src/components/Typography'

export default {
	title: 'Inputs',
}

export const variants = () => (
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
						<Subhead>Default & Primary</Subhead>
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

export const withIcons = () => (
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
						<Subhead>Default & Primary</Subhead>
					</TableCell>
					<TableCell>
						<Input
							size="s"
							iconRight={{ icon: 'phone', color: 'primary' }}
							iconLeft="search"
						/>
					</TableCell>
					<TableCell>
						<Input
							size="m"
							iconRight={{ icon: 'phone', color: 'primary' }}
							iconLeft="search"
						/>
					</TableCell>
					<TableCell>
						<Input
							size="l"
							iconRight={{ icon: 'phone', color: 'primary' }}
							iconLeft="search"
						/>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Disabled</Subhead>
					</TableCell>
					<TableCell>
						<Input
							size="s"
							variant="disabled"
							iconRight="phone"
							iconLeft="search"
						/>
					</TableCell>
					<TableCell>
						<Input
							size="m"
							variant="disabled"
							iconRight="phone"
							iconLeft="search"
						/>
					</TableCell>
					<TableCell>
						<Input
							size="l"
							variant="disabled"
							iconRight="phone"
							iconLeft="search"
						/>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Success</Subhead>
					</TableCell>
					<TableCell>
						<Input
							size="s"
							variant="success"
							iconRight="phone"
							iconLeft="search"
						/>
					</TableCell>
					<TableCell>
						<Input
							size="m"
							variant="success"
							iconRight="phone"
							iconLeft="search"
						/>
					</TableCell>
					<TableCell>
						<Input
							size="l"
							variant="success"
							iconRight="phone"
							iconLeft="search"
						/>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Error</Subhead>
					</TableCell>
					<TableCell>
						<Input
							size="s"
							variant="error"
							iconRight="phone"
							iconLeft="search"
						/>
					</TableCell>
					<TableCell>
						<Input
							size="m"
							variant="error"
							iconRight="phone"
							iconLeft="search"
						/>
					</TableCell>
					<TableCell>
						<Input
							size="l"
							variant="error"
							iconRight="phone"
							iconLeft="search"
						/>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Warning</Subhead>
					</TableCell>
					<TableCell>
						<Input
							size="s"
							variant="warning"
							iconRight="phone"
							iconLeft="search"
						/>
					</TableCell>
					<TableCell>
						<Input
							size="m"
							variant="warning"
							iconRight="phone"
							iconLeft="search"
						/>
					</TableCell>
					<TableCell>
						<Input
							size="l"
							variant="warning"
							iconRight="phone"
							iconLeft="search"
						/>
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)
