import React from 'react'
import Tag from '../Tag'
import { render, screen, fireEvent } from '../../utils/test-utils'

test('Tag is a function', () => {
	expect(typeof Tag).toBe('function')
})

test('Tag renders its children as text correctly', () => {
	const testString = 'Caution fellas!'
	render(<Tag>{testString}</Tag>)

	expect(screen.queryByText(testString)).toBeInTheDocument()
})

test('Tag renders a close icon if dismissable', () => {
	render(<Tag dismissable>Hey fellas!</Tag>)

	expect(screen.queryByTestId('close-icon')).toBeInTheDocument()
})

test('Tags should not render after being dismissed', () => {
	render(<Tag dismissable>Hey fellas!</Tag>)

	expect(screen.queryByTestId('Tag')).toBeInTheDocument()

	fireEvent.click(screen.queryByTestId('close-icon'))

	expect(screen.queryByTestId('Tag')).not.toBeInTheDocument()
})
