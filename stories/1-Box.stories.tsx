import React, { ReactNode } from 'react'
import Box from '../src/components/Box'
import StoryWrapper from '../src/utils/storybookUtil'

export default {
	title: 'Box',
}

export const usingBackgroundColor = (): ReactNode => (
	<StoryWrapper>
		<Box gridColumn="1 / 3">
			<Box backgroundColor="primary" height={100} />
		</Box>
		<Box>
			<Box backgroundColor="secondary" height={100} />
		</Box>
		<Box>
			<Box backgroundColor="error" height={100} />
		</Box>
		<Box>
			<Box backgroundColor="warning" height={100} />
		</Box>
		<Box>
			<Box backgroundColor="success" height={100} />
		</Box>
	</StoryWrapper>
)
