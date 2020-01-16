import React from 'react'
import { Table, TableRow, TableCell, TableHeaderCell } from '../src/components/Table'
import StoryWrapper from '../src/utils/storybookUtil'
import { Subhead, H3, Emphasis, Footnote } from '../src/components/Typography'
import { List, ListEl } from '../src/components/List'

export default {
	title: 'Lists',
}

export const examples = () => (
	<StoryWrapper>
		<Table>
			<thead>
				<TableRow>
					<TableHeaderCell>
						<Subhead>Default</Subhead>
					</TableHeaderCell>
					<TableHeaderCell>
						<Subhead>With typography</Subhead>
					</TableHeaderCell>
				</TableRow>
			</thead>
			<tbody>
				<TableRow>
					<TableCell>
						<List>
							<ListEl>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</ListEl>
							<ListEl>
								Suspendisse convallis magna at metus facilisis ornare.
								<List>
									<ListEl>
										In et est sed turpis consequat viverra.
									</ListEl>
									<ListEl>
										Fusce faucibus ante in libero tincidunt lacinia.
									</ListEl>
									<ListEl>
										Duis congue lacus et luctus pellentesque.
									</ListEl>
								</List>
							</ListEl>
							<ListEl>Lorem ipsum dolor sit amet.</ListEl>
							<ListEl>Lorem ipsum dolor sit amet.</ListEl>
						</List>
					</TableCell>
					<TableCell>
						<List>
							<ListEl>
								<H3>Et ullam expedita eligendi suscipit.</H3>
							</ListEl>
							<ListEl>
								<H3>Libero exercitationem quibusdam tenetur hic.</H3>
								<List>
									<ListEl>
										<Emphasis>
											At velit sequi culpa temporibus!
										</Emphasis>
										<List>
											<ListEl>
												<Footnote>
													Ad earum consequuntur nam assumenda.
												</Footnote>
											</ListEl>
											<ListEl>
												<Footnote>
													Quam commodi quia est nulla.
												</Footnote>
											</ListEl>
											<ListEl>
												<Footnote>
													Excepturi inventore ad error aut.
												</Footnote>
											</ListEl>
										</List>
									</ListEl>
									<ListEl>
										<Emphasis>
											Deleniti quae rerum tempora dignissimos.
										</Emphasis>
									</ListEl>
									<ListEl>
										<Emphasis>Sit in id sunt veniam.</Emphasis>
									</ListEl>
								</List>
							</ListEl>
							<ListEl>
								<H3>Explicabo rem incidunt aperiam harum?</H3>
							</ListEl>
							<ListEl>
								<H3>Eveniet consequatur cum rerum sed.</H3>
							</ListEl>
						</List>
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)

export const bulletPoints = () => (
	<StoryWrapper>
		<Table>
			<tbody>
				<TableRow>
					<TableCell>
						<Subhead>Default</Subhead>
					</TableCell>
					<TableCell>
						<List>
							<ListEl>Lorem ipsum dolor sit amet.</ListEl>
						</List>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Square</Subhead>
					</TableCell>
					<TableCell>
						<List bullet="square">
							<ListEl>Quam vitae maiores ipsa voluptas.</ListEl>
						</List>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Minus</Subhead>
					</TableCell>
					<TableCell>
						<List bullet="minus">
							<ListEl>Odit, perspiciatis. Rem, est similique.</ListEl>
						</List>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Arrow right</Subhead>
					</TableCell>
					<TableCell>
						<List bullet="arrow-right">
							<ListEl>Doloribus iure maiores voluptatum earum.</ListEl>
						</List>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Asterisk</Subhead>
					</TableCell>
					<TableCell>
						<List bullet="asterisk">
							<ListEl>Aliquam dolorem quod eum tempore.</ListEl>
						</List>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Check</Subhead>
					</TableCell>
					<TableCell>
						<List bullet="check">
							<ListEl>Distinctio neque ullam quod illo.</ListEl>
						</List>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Custom</Subhead>
					</TableCell>
					<TableCell>
						<List bullet="child">
							<ListEl>Deserunt culpa quaerat quas aliquam.</ListEl>
						</List>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Emoji</Subhead>
					</TableCell>
					<TableCell>
						<List bullet="✅">
							<ListEl>Lorem ipsum dolor sit amet.</ListEl>
						</List>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Subhead>Coloured</Subhead>
					</TableCell>
					<TableCell>
						<List bullet="fire-alt">
							<ListEl bulletColor="error">Burn babylon please</ListEl>
						</List>
					</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</StoryWrapper>
)
