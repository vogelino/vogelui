import React, { ReactNode } from 'react'
import Button from '../src/components/Button'

export default {
	title: 'Button',
}

export const text = (): ReactNode => <Button>Hello Button</Button>

export const emoji = (): ReactNode => (
	<Button>
		<span role="img" aria-label="so cool">
			😀 😎 👍 💯
		</span>
	</Button>
)
