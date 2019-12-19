import React, { ReactNode } from 'react'
import Button from '../src/components/Button'
import StoryWrapper from '../src/utils/storybookUtil'
import Box from '../src/components/Box'

export default {
	title: 'Buttons',
}

type ButtonStory = {
	size?: 'sm' | 'md' | 'xl'
	alignment?: 'left' | 'center' | 'right'
	stretch?: boolean
}

const buttonStory = ({
	size = 'md',
	alignment = 'center',
	stretch = false,
}: ButtonStory): ReactNode => (
	<StoryWrapper stretch={stretch}>
		<Box>
			<Button variant="basic" alignment={alignment} size={size}>
				Basic {size}
			</Button>
		</Box>
		<Box>
			<Button variant="primary" alignment={alignment} size={size}>
				Primary {size}
			</Button>
		</Box>
		<Box>
			<Button variant="success" alignment={alignment} size={size}>
				Success {size}
			</Button>
		</Box>
		<Box>
			<Button variant="error" alignment={alignment} size={size}>
				Error {size}
			</Button>
		</Box>
		<Box gridColumn="span 2">
			<Button variant="warning" alignment={alignment} size={size}>
				Warning {size}
			</Button>
		</Box>
	</StoryWrapper>
)

export const buttonSmall = (): ReactNode => buttonStory({ stretch: false, size: 'sm' })
export const buttonMedium = (): ReactNode => buttonStory({ stretch: false, size: 'md' })
export const buttonLarge = (): ReactNode => buttonStory({ stretch: false, size: 'xl' })

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
