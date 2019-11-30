import React from 'react'
import Box from '../src/components/Box'
import makeStory from '../src/utils/storybookUtil'

export default {
	title: 'Box',
}

export const usingBackgroundColor = makeStory(
	<Box>
		<Box my={10} backgroundColor="primary" width={100} height={100} />
		<Box my={10} backgroundColor="red" width={100} height={100} />
		<Box my={10} backgroundColor="green" width={100} height={100} />
	</Box>,
)
