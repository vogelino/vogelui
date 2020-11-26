import React from 'react'
import Button from '../Button'
import { fireEvent, render, screen } from '../../utils/test-utils'

test('Button is a function', () => {
	expect(typeof Button).toBe('function')
})

test('Button renders its children as text correctly', () => {
	const testString = 'Caution fellas!'
	render(<Button>{testString}</Button>)

	expect(screen.queryByText(testString)).toBeInTheDocument()
})

test('Button renders a left icon if provided', () => {
	const testIcon = 'times'
	render(<Button iconLeft={testIcon}>Hey fellas!</Button>)

	const icon = screen.getByTestId('left-icon')
	expect(icon).toBeInTheDocument()
	expect(icon.getAttribute('data-icon')).toBe(testIcon)
})

test('Button renders a right icon if provided', () => {
	const testIcon = 'times'
	render(<Button iconRight={testIcon}>Hey fellas!</Button>)

	const icon = screen.getByTestId('right-icon')
	expect(icon).toBeInTheDocument()
	expect(icon.getAttribute('data-icon')).toBe(testIcon)
})

test('Button renders a center icon if provided', () => {
	const testIcon = 'times'
	render(<Button iconCenter={testIcon}>Hey fellas!</Button>)

	const icon = screen.getByTestId('center-icon')
	expect(icon).toBeInTheDocument()
	expect(icon.getAttribute('data-icon')).toBe(testIcon)
})

test('Button renders as another tag if as prop is provided', () => {
	const testAs = 'span'
	render(<Button as={testAs}>Hey fellas!</Button>)

	const button = screen.getByTestId('button')
	expect(button).toBeInTheDocument()
	expect(button.tagName.toLowerCase()).toBe(testAs.toLowerCase())
})

test('Button renders at different size if set', () => {
	const testWidth = 200
	const testHeight = 300
	render(
		<Button width={testWidth} height={testHeight}>
			Hey fellas!
		</Button>,
	)

	const button = screen.getByTestId('button')
	const { width, height } = window.getComputedStyle(button)
	expect(button).toBeInTheDocument()
	expect(parseInt(width, 10)).toBe(testWidth)
	expect(parseInt(height, 10)).toBe(testHeight)
})

test('Button aligns text differently if set', () => {
	const testAlign = 'right'
	render(<Button align={testAlign}>Hey fellas!</Button>)

	const buttonText = screen.getByTestId('button').querySelector('span')
	const { 'text-align': textAlign } = window.getComputedStyle(buttonText)
	expect(textAlign).toBe(testAlign)
})

test('Button triggers the provided onClick function if clicked', () => {
	const testOnClick = jest.fn(() => '')
	render(<Button onClick={testOnClick}>Hey fellas!</Button>)

	fireEvent.click(screen.getByTestId('button'))
	expect(testOnClick).toHaveBeenCalledTimes(1)
})
