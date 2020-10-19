/** @jsx jsx */
import { useState } from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import PropTypes from 'prop-types'
import {
	buttonVariantProp,
	buttonSizeProp,
	buttonInteractiveProps,
} from '../theme/button'
import { getCustomColorTheme } from '../utils/colorUtil'

const getDismissableStyles = () => ({
	display: 'inline-flex',
	alignContent: 'center',
	alignItems: 'center',
	paddingRight: '2em',
	position: 'relative',
})

const ClearIcon = ({ size = 'm', variant = 'default', onClick = () => {}, ...props }) => {
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
			{...props}
		>
			✕
		</Styled.div>
	)
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
	...props
}) => {
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
		<Styled.div className={className} as={as} sx={finalSX} {...props}>
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

Tag.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
	className: PropTypes.string,
	sx: PropTypes.shape({}),
	variant: buttonVariantProp,
	size: buttonSizeProp,
	as: PropTypes.string,
	color: PropTypes.string,
	dismissable: PropTypes.bool,
}

export default Tag
