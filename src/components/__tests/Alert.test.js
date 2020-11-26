import React from 'react'
import Alert from '../Alert'
import { render, screen, fireEvent } from '../../utils/test-utils'

test('Alert is a function', () => {
	expect(typeof Alert).toBe('function')
})

test('Alert renders its children as text correctly', () => {
	const testString = 'Caution fellas!'
	render(<Alert>{testString}</Alert>)

	expect(screen.queryByText(testString)).toBeInTheDocument()
})

test('Alert renders a title if provided', () => {
	const testString = 'Caution!'
	render(<Alert title={testString}>Hey fellas!</Alert>)

	expect(screen.queryByText(testString)).toBeInTheDocument()
})

test('Alert renders a close icon if dismissable', () => {
	render(<Alert dismissable>Hey fellas!</Alert>)

	expect(screen.queryByTestId('close-icon')).toBeInTheDocument()
})

test('Alerts should not render after being dismissed', () => {
	render(<Alert dismissable>Hey fellas!</Alert>)

	expect(screen.queryByTestId('alert')).toBeInTheDocument()

	fireEvent.click(screen.queryByTestId('close-icon'))

	expect(screen.queryByTestId('alert')).not.toBeInTheDocument()
})
