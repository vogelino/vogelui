import React from 'react'
import { Button } from '../src'
import makeStory from '../src/utils/storybookUtil'

export default {
	title: 'Buttons',
}

export const buttonWithText = makeStory(<Button>Hello Button</Button>)

export const buttonWithEmoji = makeStory(
	<Button>
		<span role="img" aria-label="so cool">
			😀 😎 👍
		</span>
	</Button>,
)
