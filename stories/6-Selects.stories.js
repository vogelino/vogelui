import React from 'react'
import { Table, TableRow, TableCell, TableHeaderCell } from '../src/components/Table'
import StoryWrapper from '../src/utils/storybookUtil'
import { Subhead } from '../src/components/Typography'
import Select from '../src/components/Select'
import countries from './data/countries'

export default {
	title: 'Selects',
}

const options = countries.map(({ name, code }) => ({
	label: name,
	value: code,
}))

export const examples = () => (
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
						<Subhead>Empty</Subhead>
					</TableCell>
					<TableCell width="70%">
						<Select options={options} defaultIsExpanded={true} />
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>With initial value</Subhead>
					</TableCell>
					<TableCell>
						<Select
							options={options}
							defaultValue={options[0]}
							variant="error"
						/>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Clearable</Subhead>
					</TableCell>
					<TableCell>
						<Select
							options={options}
							defaultValue={options[0]}
							isClearable
							variant="success"
						/>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Searchable</Subhead>
					</TableCell>
					<TableCell>
						<Select
							options={options}
							placeholder="Type to search"
							isSearchable
							isClearable
							variant="warning"
						/>
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)
