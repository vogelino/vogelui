/** @jsx jsx */
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { jsx, Styled } from 'theme-ui'

const tableAnimation = {
	initial: { opacity: 0, y: 8 },
	mount: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
	unmount: { opacity: 0, y: -8, transition: { staggerChildren: 0.05 } },
}

const trAnimation = {
	initial: { opacity: 0, y: 8 },
	mount: { opacity: 1, y: 0 },
	unmount: { opacity: 0, y: -8 },
}

export const Table = ({ children = null, sx = {}, ...props }) => (
	<Styled.table
		layout
		variants={tableAnimation}
		initial="initial"
		animate="mount"
		exit="unmount"
		as={motion.table}
		sx={{ textAlign: 'left', borderSpacing: 0, ...sx }}
		{...props}
	>
		{children}
	</Styled.table>
)

Table.propTypes = {
	children: PropTypes.node,
	sx: PropTypes.shape({}),
}

export const TableRow = ({ children = null, sx = {}, ...props }) => (
	<Styled.tr
		as={motion.tr}
		variants={trAnimation}
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
	<Styled.th as={motion.th} sx={{ ...cellStyles, ...sx }}>
		{children}
	</Styled.th>
)

TableHeaderCell.propTypes = {
	children: PropTypes.node,
	sx: PropTypes.shape({}),
}

export const TableCell = ({ children = null, sx = {}, ...props }) => (
	<Styled.td as={motion.td} sx={{ ...cellStyles, ...sx }} {...props}>
		{children}
	</Styled.td>
)

TableCell.propTypes = {
	children: PropTypes.node,
	sx: PropTypes.shape({}),
}
