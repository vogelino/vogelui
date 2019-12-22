/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { ReactElement, PropsWithChildren } from 'react'

type TableProps = PropsWithChildren<{ [key: string]: {} | string | number }>
type TableHeaderProps = PropsWithChildren<{}>
type TableRowProps = PropsWithChildren<{}>
type TableCellProps = PropsWithChildren<{}>

export const Table = ({ children, ...props }: TableProps): ReactElement => (
	<Styled.table {...props}>{children}</Styled.table>
)

export const TableHeader = ({ children }: TableHeaderProps): ReactElement => (
	<Styled.th>{children}</Styled.th>
)

export const TableRow = ({ children }: TableRowProps): ReactElement => (
	<Styled.tr>{children}</Styled.tr>
)

export const TableCell = ({ children }: TableCellProps): ReactElement => (
	<Styled.td>{children}</Styled.td>
)
