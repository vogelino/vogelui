/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { ReactNode, PropsWithChildren, ReactElement } from 'react'
import { Subhead } from '../src/components/Typography'
import { Table, TableHeaderCell, TableRow, TableCell } from '../src/components/Table'
import StoryWrapper from '../src/utils/storybookUtil'

export default {
	title: 'Colors',
}

const Box = ({
	children,
	sx = {},
	color: backgroundColor = 'primary',
	...props
}: PropsWithChildren<{ color?: string; sx?: {} }>): ReactElement => (
	<Styled.div
		{...props}
		sx={{ ...sx, backgroundColor, width: 40, height: 40, borderRadius: 4 }}
	>
		{children}
	</Styled.div>
)

const DefaultRow = ({ children }: PropsWithChildren<{}>): ReactElement => (
	<TableRow sx={{ backgroundColor: 'greyUltraLight' }}>{children}</TableRow>
)

export const Scales = (): ReactNode => (
	<StoryWrapper>
		<div>
			<Table>
				<thead>
					<TableRow>
						<TableHeaderCell />
						<TableHeaderCell>
							<Subhead>Primary</Subhead>
						</TableHeaderCell>
						<TableHeaderCell>
							<Subhead>Grey</Subhead>
						</TableHeaderCell>
						<TableHeaderCell>
							<Subhead>Success</Subhead>
						</TableHeaderCell>
						<TableHeaderCell>
							<Subhead>Error</Subhead>
						</TableHeaderCell>
						<TableHeaderCell>
							<Subhead>Warning</Subhead>
						</TableHeaderCell>
					</TableRow>
				</thead>
				<tbody>
					<TableRow>
						<TableCell>
							<Subhead>Extra Dark</Subhead>
						</TableCell>
						<TableCell>
							<Box color="primaryExtraDark" />
						</TableCell>
						<TableCell>
							<Box color="greyExtraDark" />
						</TableCell>
						<TableCell>
							<Box color="successExtraDark" />
						</TableCell>
						<TableCell>
							<Box color="errorExtraDark" />
						</TableCell>
						<TableCell>
							<Box color="warningExtraDark" />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Subhead>Dark</Subhead>
						</TableCell>
						<TableCell>
							<Box color="primaryDark" />
						</TableCell>
						<TableCell>
							<Box color="greyDark" />
						</TableCell>
						<TableCell>
							<Box color="successDark" />
						</TableCell>
						<TableCell>
							<Box color="errorDark" />
						</TableCell>
						<TableCell>
							<Box color="warningDark" />
						</TableCell>
					</TableRow>
					<DefaultRow>
						<TableCell>
							<Subhead>Default</Subhead>
						</TableCell>
						<TableCell>
							<Box color="primary" />
						</TableCell>
						<TableCell>
							<Box color="grey" />
						</TableCell>
						<TableCell>
							<Box color="success" />
						</TableCell>
						<TableCell>
							<Box color="error" />
						</TableCell>
						<TableCell>
							<Box color="warning" />
						</TableCell>
					</DefaultRow>
					<TableRow>
						<TableCell>
							<Subhead>Light</Subhead>
						</TableCell>
						<TableCell>
							<Box color="primaryLight" />
						</TableCell>
						<TableCell>
							<Box color="greyLight" />
						</TableCell>
						<TableCell>
							<Box color="successLight" />
						</TableCell>
						<TableCell>
							<Box color="errorLight" />
						</TableCell>
						<TableCell>
							<Box color="warningLight" />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Subhead>Extra light</Subhead>
						</TableCell>
						<TableCell>
							<Box color="primaryExtraLight" />
						</TableCell>
						<TableCell>
							<Box color="greyExtraLight" />
						</TableCell>
						<TableCell>
							<Box color="successExtraLight" />
						</TableCell>
						<TableCell>
							<Box color="errorExtraLight" />
						</TableCell>
						<TableCell>
							<Box color="warningExtraLight" />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Subhead>Ultra light</Subhead>
						</TableCell>
						<TableCell>
							<Box color="primaryUltraLight" />
						</TableCell>
						<TableCell>
							<Box color="greyUltraLight" />
						</TableCell>
						<TableCell>
							<Box color="successUltraLight" />
						</TableCell>
						<TableCell>
							<Box color="errorUltraLight" />
						</TableCell>
						<TableCell>
							<Box color="warningUltraLight" />
						</TableCell>
					</TableRow>
				</tbody>
			</Table>
		</div>
	</StoryWrapper>
)
