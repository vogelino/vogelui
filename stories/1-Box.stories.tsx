import React, { ReactNode } from 'react'
import Box from '../src/components/Box'
import StoryWrapper from '../src/utils/storybookUtil'

export default {
	title: 'Box',
}

export const usingBackgroundColor = (): ReactNode => (
	<StoryWrapper>
		<Box>
			<Box my={10} backgroundColor="primary" width={100} height={100} />
			<Box my={10} backgroundColor="secondary" width={100} height={100} />
			<Box my={10} backgroundColor="error" width={100} height={100} />
		</Box>
	</StoryWrapper>
)
