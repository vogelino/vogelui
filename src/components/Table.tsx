/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { ReactElement, PropsWithChildren } from 'react'

type TableProps = PropsWithChildren<{
	sx?: {}
}>

type TableHeaderProps = PropsWithChildren<{
	sx?: {}
}>

type TableRowProps = PropsWithChildren<{
	sx?: {}
}>

type TableCellProps = PropsWithChildren<{
	width?: number | string
	height?: number | string
	className?: string
	sx?: {}
}>

export const Table = ({ children, sx, ...props }: TableProps): ReactElement => (
	<Styled.table sx={{ textAlign: 'left', borderSpacing: 0, ...sx }} {...props}>
		{children}
	</Styled.table>
)

export const TableRow = ({
	children,
	sx = {},
	...props
}: TableRowProps): ReactElement => (
	<Styled.tr
		sx={{
			'th:first-child, td:first-child': {
				borderRadius: '4px 0 0 4px',
			},
			'th:last-child, td:last-child': {
				borderRadius: '0 4px 4px 0',
			},
			...sx,
		}}
		{...props}
	>
		{children}
	</Styled.tr>
)

const cellStyles = {
	minWidth: 80,
	padding: 3,
}
export const TableHeaderCell = ({
	children,
	sx = {},
}: TableHeaderProps): ReactElement => (
	<Styled.th sx={{ ...cellStyles, ...sx }}>{children}</Styled.th>
)

export const TableCell = ({
	children,
	sx = {},
	...props
}: TableCellProps): ReactElement => (
	<Styled.td sx={{ ...cellStyles, ...sx }} {...props}>
		{children}
	</Styled.td>
)
