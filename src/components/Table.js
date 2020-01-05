/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, Styled } from 'theme-ui'

export const Table = ({ children = null, sx = {}, ...props }) => (
	<Styled.table sx={{ textAlign: 'left', borderSpacing: 0, ...sx }} {...props}>
		{children}
	</Styled.table>
)

Table.propTypes = {
	children: PropTypes.node,
	sx: PropTypes.shape({}),
}

export const TableRow = ({ children = null, sx = {}, ...props }) => (
	<Styled.tr
		sx={{
			'th:first-of-type, td:first-of-type': {
				borderRadius: '4px 0 0 4px',
			},
			'th:last-of-type, td:last-of-type': {
				borderRadius: '0 4px 4px 0',
			},
			...sx,
		}}
		{...props}
	>
		{children}
	</Styled.tr>
)

TableRow.propTypes = {
	children: PropTypes.node,
	sx: PropTypes.shape({}),
}

const cellStyles = {
	minWidth: 80,
	padding: 3,
}
export const TableHeaderCell = ({ children = null, sx = {} }) => (
	<Styled.th sx={{ ...cellStyles, ...sx }}>{children}</Styled.th>
)

TableHeaderCell.propTypes = {
	children: PropTypes.node,
	sx: PropTypes.shape({}),
}

export const TableCell = ({ children = null, sx = {}, ...props }) => (
	<Styled.td sx={{ ...cellStyles, ...sx }} {...props}>
		{children}
	</Styled.td>
)

TableCell.propTypes = {
	children: PropTypes.node,
	sx: PropTypes.shape({}),
}
