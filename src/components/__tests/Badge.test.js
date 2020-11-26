import React from 'react'
import Badge, { DOT_STYLES } from '../Badge'
import { render, screen, cleanup } from '../../utils/test-utils'
import { getCustomColorTheme } from '../../utils/colorUtil'
import { parseToRgb } from 'polished'

afterEach(cleanup)

test('Badge is a function', () => {
	expect(typeof Badge).toBe('function')
})

test('Badge renders its children as text correctly', () => {
	const testString = 'Update'
	render(<Badge>{testString}</Badge>)

	expect(screen.queryByText(testString)).toBeInTheDocument()
})

test('Badge renders its content as number prop correctly', () => {
	const testContent = 32
	render(<Badge content={testContent} />)

	expect(screen.queryByText(String(testContent))).toBeInTheDocument()
})

test('Badge content is cropped to +99 if greater than 99', () => {
	const testContent = 100
	render(<Badge content={testContent} />)

	expect(screen.queryByText('+99')).toBeInTheDocument()
})

test('Badge content is cropped to -99 if smaller than -99', () => {
	const testContent = -100
	render(<Badge content={testContent} />)

	expect(screen.queryByText('-99')).toBeInTheDocument()
})

test('Badge renders in a custom color', () => {
	const testColor = '#BADA55'
	const customTheme = getCustomColorTheme(testColor)

	render(<Badge data-testid="badge" content={1} color={testColor} />)

	const badgeRoots = screen.getByTestId('badge')
	const { backgroundColor, color, borderColor } = global.getComputedStyle(badgeRoots)

	expect(parseToRgb(backgroundColor)).toEqual(parseToRgb(customTheme.backgroundColor))
	expect(parseToRgb(color)).toEqual(parseToRgb(customTheme.color))
	expect(parseToRgb(borderColor)).toEqual(parseToRgb(customTheme.borderColor))
})

test('Badge has no offset if no children', () => {
	render(<Badge data-testid="badge" />)

	const badgeRoots = screen.getByTestId('badge')
	const { position } = global.getComputedStyle(badgeRoots)

	expect(position).not.toBe('absolute')
})

test('Badge has offset if children', () => {
	render(<Badge data-testid="badge">Content</Badge>)

	const badgeRoots = screen.getByTestId('badge')
	const { position } = global.getComputedStyle(badgeRoots)

	expect(position).toBe('absolute')
})

test('Badge offsets right if children is text', () => {
	render(<Badge data-testid="badge">Hey</Badge>)

	const badgeRoots = screen.getByTestId('badge')
	const { transform } = global.getComputedStyle(badgeRoots)

	expect(transform).toBe('translateX(100%) translateY(-50%) scale(0) translateZ(0)')
})

test('Badge offsets right if children is node', () => {
	render(
		<Badge data-testid="badge">
			<div />
		</Badge>,
	)

	const badgeRoots = screen.getByTestId('badge')
	const { transform } = global.getComputedStyle(badgeRoots)

	expect(transform).toBe('translateX(50%) translateY(-50%) scale(0) translateZ(0)')
})

test('Badge renders dot if no content is given', () => {
	render(<Badge data-testid="badge" />)

	const badgeRoots = screen.getByTestId('badge')
	const { width, height, padding } = global.getComputedStyle(badgeRoots)

	expect(parseInt(width, 10)).toBe(DOT_STYLES.width)
	expect(parseInt(height, 10)).toBe(DOT_STYLES.height)
	expect(parseInt(padding, 10)).toBe(DOT_STYLES.padding)
})
