import React from 'react'
import { Table, TableRow, TableCell, TableHeaderCell } from '../src/components/Table'
import StoryWrapper from '../src/utils/storybookUtil'
import { Subhead } from '../src/components/Typography'
import Tooltip from '../src/components/Tooltip'
import Button from '../src/components/Button'

export default {
	title: 'Tooltips',
}

export const variants = () => (
	<StoryWrapper>
		<Table>
			<thead>
				<TableRow>
					<TableHeaderCell>
						<Subhead>Dark</Subhead>
					</TableHeaderCell>
					<TableHeaderCell sx={{ background: 'black' }}>
						<Subhead>Light</Subhead>
					</TableHeaderCell>
				</TableRow>
			</thead>
			<tbody>
				<TableRow>
					<TableCell>
						<Tooltip
							text="More information"
							variant="dark"
							position="right-center"
						>
							<Button>Hover me</Button>
						</Tooltip>
					</TableCell>
					<TableCell sx={{ background: 'black' }}>
						<Tooltip
							text="More information"
							variant="light"
							position="right-center"
						>
							<Button>Hover me</Button>
						</Tooltip>
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)

export const positions = () => (
	<StoryWrapper>
		<Table>
			<thead>
				<TableRow>
					<TableHeaderCell />
					<TableHeaderCell>
						<Subhead>Start</Subhead>
					</TableHeaderCell>
					<TableHeaderCell>
						<Subhead>Center</Subhead>
					</TableHeaderCell>
					<TableHeaderCell>
						<Subhead>End</Subhead>
					</TableHeaderCell>
				</TableRow>
			</thead>
			<tbody>
				<TableRow>
					<TableCell>
						<Subhead>Top</Subhead>
					</TableCell>
					<TableCell>
						<Tooltip text="More information" position="top-left">
							<Button>Hover me</Button>
						</Tooltip>
					</TableCell>
					<TableCell>
						<Tooltip text="More information" position="top-center">
							<Button>Hover me</Button>
						</Tooltip>
					</TableCell>
					<TableCell>
						<Tooltip text="More information" position="top-right">
							<Button>Hover me</Button>
						</Tooltip>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Right</Subhead>
					</TableCell>
					<TableCell>
						<Tooltip text="More information" position="right-top">
							<Button>Hover me</Button>
						</Tooltip>
					</TableCell>
					<TableCell>
						<Tooltip text="More information" position="right-center">
							<Button>Hover me</Button>
						</Tooltip>
					</TableCell>
					<TableCell>
						<Tooltip text="More information" position="right-bottom">
							<Button>Hover me</Button>
						</Tooltip>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Bottom</Subhead>
					</TableCell>
					<TableCell>
						<Tooltip text="More information" position="bottom-left">
							<Button>Hover me</Button>
						</Tooltip>
					</TableCell>
					<TableCell>
						<Tooltip text="More information" position="bottom-center">
							<Button>Hover me</Button>
						</Tooltip>
					</TableCell>
					<TableCell>
						<Tooltip text="More information" position="bottom-right">
							<Button>Hover me</Button>
						</Tooltip>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Left</Subhead>
					</TableCell>
					<TableCell>
						<Tooltip text="More information" position="left-top">
							<Button>Hover me</Button>
						</Tooltip>
					</TableCell>
					<TableCell>
						<Tooltip text="More information" position="left-center">
							<Button>Hover me</Button>
						</Tooltip>
					</TableCell>
					<TableCell>
						<Tooltip text="More information" position="left-bottom">
							<Button>Hover me</Button>
						</Tooltip>
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)
