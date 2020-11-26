// @flow
/** @jsx jsx */
import { useState } from 'react'
import type { Node } from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { buttonInteractiveProps } from '../theme/button'
import { getCustomColorTheme } from '../utils/colorUtil'

const getDismissableStyles = () => ({
	display: 'inline-flex',
	alignContent: 'center',
	alignItems: 'center',
	paddingRight: '2em',
	position: 'relative',
})

type VariantType = 'default' | 'primary' | 'error' | 'warning' | 'success'
type SizeType = 's' | 'm' | 'l'

type ClearIconType = {
	size?: SizeType,
	variant?: VariantType,
	onClick?: Function,
}

const ClearIcon = ({
	size = 'm',
	variant = 'default',
	onClick = () => {},
}: ClearIconType) => {
	const sizeStyles = {
		s: {
			right: '3px',
			fontSize: '0.7rem',
			lineHeight: '0.7rem',
			width: '0.7rem',
			height: '0.7rem',
		},
		m: {
			right: '6px',
		},
		l: {
			right: '8px',
		},
	}

	return (
		<Styled.div
			data-testid="close-icon"
			as="span"
			sx={{
				opacity: 0.4,
				fontWeight: 'bold',
				cursor: 'pointer',
				transition: 'opacity 100ms ease-out',
				width: '1em',
				height: '1em',
				borderRadius: '50%',
				outline: 'none',
				fontFamily: 'monospace',
				transform: 'translateY(-50%) scale(1.5)',
				lineHeight: '1em',
				verticalAlign: 'middle',
				fontSize: '1rem',
				position: 'absolute',
				top: '50%',
				textAlign: 'center',
				...sizeStyles[size],
				...buttonInteractiveProps(variant),
				'&:hover': {
					opacity: 1,
				},
			}}
			onClick={onClick}
			role="button"
			tabIndex={1}
		>
			✕
		</Styled.div>
	)
}

type TagPropType = {
	children?: string | number | Node,
	className?: string,
	as?: string,
	variant?: VariantType,
	size?: SizeType,
	sx?: Object,
	dismissable?: boolean,
	color?: string,
}

const Tag = ({
	children = null,
	className = '',
	as = 'span',
	variant = 'default',
	size = 'm',
	sx = {},
	dismissable = false,
	color = undefined,
}: TagPropType): Node => {
	const [isVisible, setVisible] = useState(true)
	const { theme } = useThemeUI()
	const finalSX = {
		...(theme?.tags?.common || {}),
		...(theme?.tags[variant] || {}),
		...(theme?.tags?.sizes[size] || {}),
		...((color && getCustomColorTheme(color)) || {}),
		...((dismissable && getDismissableStyles()) || {}),
		...sx,
	}

	return isVisible ? (
		<Styled.div data-testid="Tag" className={className} as={as} sx={finalSX}>
			<span>{children}</span>
			{dismissable && (
				<ClearIcon
					theme={theme}
					size={size}
					variant={variant}
					onClick={() => setVisible(false)}
				>
					✕
				</ClearIcon>
			)}
		</Styled.div>
	) : null
}

export default Tag
