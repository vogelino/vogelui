import React from 'react'
import { Box, Boxer } from '../src'
import makeStory from '../src/utils/storybookUtil'

export default {
	title: 'Box',
}

export const usingBackgroundColor = makeStory(
	<Boxer my={10}>
		<Box backgroundColor="blue" width={100} height={100} />
		<Box backgroundColor="red" width={100} height={100} />
		<Box backgroundColor="green" width={100} height={100} />
	</Boxer>,
)
