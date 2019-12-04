import React, { ReactNode } from 'react'
import Button from '../src/components/Button'
import StoryWrapper from '../src/utils/storybookUtil'
import Box from '../src/components/Box'

export default {
	title: 'Buttons',
}

export const buttonWithText = (): ReactNode => (
	<StoryWrapper>
		<Box>
			<Button variant="basic" size="xl">
				Basic large
			</Button>
		</Box>
		<Box>
			<Button variant="primary" size="xl">
				Primary large
			</Button>
		</Box>
		<Box>
			<Button variant="success" size="xl">
				Success large
			</Button>
		</Box>
		<Box>
			<Button variant="error" size="xl">
				Error large
			</Button>
		</Box>
		<Box gridColumn="span 2">
			<Button variant="warning" size="xl">
				Warning large
			</Button>
		</Box>
	</StoryWrapper>
)

export const buttonWithEmoji = (): ReactNode => (
	<StoryWrapper>
		<Box gridColumn="span 2" mx="auto" gridTemplateColumns="3rem 3rem 3rem">
			<Button mx={1}>
				<span role="img" aria-label="happy face">
					😀
				</span>
			</Button>
			<Button mx={1}>
				<span role="img" aria-label="so cool">
					😎
				</span>
			</Button>
			<Button mx={1}>
				<span role="img" aria-label="thumbs up">
					👍
				</span>
			</Button>
		</Box>
	</StoryWrapper>
)
