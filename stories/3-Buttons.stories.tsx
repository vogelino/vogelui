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

export const alignments = (): ReactNode => (
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
						<Button size="s" width={200} align="left">
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button size="s" width={200} align="center">
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button size="s" width={200} align="right">
							Click me
						</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Medium</Subhead>
					</TableCell>
					<TableCell>
						<Button size="m" width={200} align="left">
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button size="m" width={200} align="center">
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button size="m" width={200} align="right">
							Click me
						</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Large</Subhead>
					</TableCell>
					<TableCell>
						<Button size="l" width={200} align="left">
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button size="l" width={200} align="center">
							Click me
						</Button>
					</TableCell>
					<TableCell>
						<Button size="l" width={200} align="right">
							Click me
						</Button>
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)

export const autoWidthButtonWithIcons = (): ReactNode => (
	<StoryWrapper>
		<Table>
			<thead>
				<TableRow>
					<TableHeaderCell />
					<TableHeaderCell>
						<Subhead>On left</Subhead>
					</TableHeaderCell>
					<TableHeaderCell>
						<Subhead>On right</Subhead>
					</TableHeaderCell>
					<TableHeaderCell>
						<Subhead>On both sides</Subhead>
					</TableHeaderCell>
				</TableRow>
			</thead>
			<tbody>
				<TableRow>
					<TableCell>
						<Subhead>Small</Subhead>
					</TableCell>
					<TableCell>
						<Button iconLeft="arrow-left" size="s">
							Previous
						</Button>
					</TableCell>
					<TableCell>
						<Button iconRight="arrow-right" size="s">
							Next
						</Button>
					</TableCell>
					<TableCell>
						<Button iconRight="bars" iconLeft="chevron-down" size="s">
							Menu
						</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Medium</Subhead>
					</TableCell>
					<TableCell>
						<Button iconLeft="bell-slash" size="m">
							Mute
						</Button>
					</TableCell>
					<TableCell>
						<Button iconRight="calendar-alt" size="m">
							Add to calendar
						</Button>
					</TableCell>
					<TableCell>
						<Button iconRight="cannabis" iconLeft="pills" size="m">
							Take drugs
						</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Large</Subhead>
					</TableCell>
					<TableCell>
						<Button iconLeft="check" size="l">
							Confirm
						</Button>
					</TableCell>
					<TableCell>
						<Button iconRight="cloud-download-alt" size="l">
							Download
						</Button>
					</TableCell>
					<TableCell>
						<Button
							iconRight="envelope-open-text"
							iconLeft="ellipsis-h"
							size="l"
						>
							Preferences
						</Button>
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)

export const fixedWidthButtonWithIcons = (): ReactNode => (
	<StoryWrapper>
		<Table>
			<thead>
				<TableRow>
					<TableHeaderCell />
					<TableHeaderCell>
						<Subhead>On left</Subhead>
					</TableHeaderCell>
					<TableHeaderCell>
						<Subhead>On right</Subhead>
					</TableHeaderCell>
					<TableHeaderCell>
						<Subhead>On both sides</Subhead>
					</TableHeaderCell>
				</TableRow>
			</thead>
			<tbody>
				<TableRow>
					<TableCell>
						<Subhead>Small</Subhead>
					</TableCell>
					<TableCell>
						<Button width={200} iconLeft="arrow-left" size="s">
							Previous
						</Button>
					</TableCell>
					<TableCell>
						<Button width={200} iconRight="arrow-right" size="s">
							Next
						</Button>
					</TableCell>
					<TableCell>
						<Button
							align="center"
							width={200}
							iconRight="bars"
							iconLeft="chevron-down"
							size="s"
						>
							Menu
						</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Medium</Subhead>
					</TableCell>
					<TableCell>
						<Button width={200} iconLeft="bell-slash" size="m">
							Mute
						</Button>
					</TableCell>
					<TableCell>
						<Button width={200} iconRight="calendar-alt" size="m">
							Add to calendar
						</Button>
					</TableCell>
					<TableCell>
						<Button
							align="center"
							width={200}
							iconRight="cannabis"
							iconLeft="pills"
							size="m"
						>
							Take drugs
						</Button>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Large</Subhead>
					</TableCell>
					<TableCell>
						<Button width={200} iconLeft="check" size="l">
							Confirm
						</Button>
					</TableCell>
					<TableCell>
						<Button width={200} iconRight="cloud-download-alt" size="l">
							Download
						</Button>
					</TableCell>
					<TableCell>
						<Button
							align="center"
							width={200}
							iconRight="envelope-open-text"
							iconLeft="ellipsis-h"
							size="l"
						>
							Preferences
						</Button>
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)

export const buttonGroup = (): ReactNode => (
	<StoryWrapper>
		<Table>
			<thead>
				<TableRow>
					<TableHeaderCell />
					<TableHeaderCell />
				</TableRow>
			</thead>
			<tbody>
				<TableRow>
					<TableCell>
						<Subhead>Small</Subhead>
					</TableCell>
					<TableCell>
						<Button.Group>
							<Button variant="primary" size="s">
								Click me
							</Button>
							<Button variant="primary" size="s">
								Click me
							</Button>
							<Button variant="primary" size="s">
								Click me
							</Button>
						</Button.Group>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Medium</Subhead>
					</TableCell>
					<TableCell>
						<Button.Group>
							<Button variant="success" size="m">
								Click me
							</Button>
							<Button variant="success" size="m">
								Click me
							</Button>
							<Button variant="success" size="m">
								Click me
							</Button>
						</Button.Group>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Large</Subhead>
					</TableCell>
					<TableCell>
						<Button.Group>
							<Button variant="warning" size="l">
								Click me
							</Button>
							<Button variant="warning" size="l">
								Click me
							</Button>
							<Button variant="warning" size="l">
								Click me
							</Button>
						</Button.Group>
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)
