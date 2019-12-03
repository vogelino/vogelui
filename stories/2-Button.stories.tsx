import React, { ReactNode } from 'react'
import Button from '../src/components/Button'
import StoryWrapper from '../src/utils/storybookUtil'

export default {
	title: 'Buttons',
}

export const buttonWithText = (): ReactNode => (
	<StoryWrapper>
		<div>
			<Button variant="basic" size="xl">
				Basic large
			</Button>
		</div>
		<div>
			<Button variant="primary" size="xl">
				Primary large
			</Button>
		</div>
		<div>
			<Button variant="success" size="xl">
				Success large
			</Button>
		</div>
		<div>
			<Button variant="error" size="xl">
				Error large
			</Button>
		</div>
		<div>
			<Button variant="warning" size="xl">
				Warning large
			</Button>
		</div>
	</StoryWrapper>
)

export const buttonWithEmoji = (): ReactNode => (
	<StoryWrapper>
		<div>
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
		</div>
	</StoryWrapper>
)
