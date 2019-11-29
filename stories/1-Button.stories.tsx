import React from 'react'
import Button from '../src/components/Button'
import makeStory from '../src/utils/storybookUtil'

export default {
	title: 'Button',
}

export const text = makeStory(<Button>Hello Button</Button>)

export const emoji = makeStory(
	<Button>
		<span role="img" aria-label="so cool">
			😀 😎 👍
		</span>
	</Button>,
)
