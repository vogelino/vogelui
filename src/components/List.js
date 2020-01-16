/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx, Styled } from 'theme-ui'
import Icon from './Icon'
import { hasEmoji } from '../utils/regexUtil'

export const ListEl = ({
	children,
	sx = {},
	parentBullet,
	bullet,
	bulletColor = 'greyLight',
}) => {
	const icon = bullet || parentBullet
	const bulletIsEmoji = hasEmoji(icon)
	return (
		<Styled.div
			as="li"
			sx={{
				paddingTop: 1,
				paddingBottom: 1,
				paddingLeft: 5,
				position: 'relative',
				...sx,
			}}
		>
			<Styled.div
				as="span"
				sx={{
					position: 'absolute',
					top: 1,
					left: 0,
					lineHeight: '18px',
					transform:
						icon === 'circle' || icon === 'square' || icon === 'minus'
							? 'scale(.5)'
							: 'none',
				}}
			>
				{bulletIsEmoji ? icon : <Icon icon={icon} defaultColor={bulletColor} />}
			</Styled.div>
			{children}
		</Styled.div>
	)
}

ListEl.propTypes = {
	sx: PropTypes.shape({}),
	parentBullet: Icon.propTypes.icon,
	bullet: Icon.propTypes.icon,
	bulletColor: Icon.propTypes.defaultColor,
	children: PropTypes.node,
}

export const List = ({ children, sx = {}, as = 'ul', bullet = 'circle' }) => (
	<Styled.div
		as={as}
		sx={{
			margin: 0,
			padding: 0,
			paddingLeft: 0,
			listStyle: 'none',
			'& > li > ul, & > li > ol': {
				paddingLeft: 4,
				paddingTop: 2,
			},
			...sx,
		}}
	>
		{React.Children.toArray(children).map((child) =>
			React.cloneElement(child, { parentBullet: bullet }),
		)}
	</Styled.div>
)

List.propTypes = {
	as: PropTypes.oneOf(['ul', 'ol']),
	bullet: ListEl.propTypes.bullet,
	sx: PropTypes.shape({}),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.shape({ type: PropTypes.oneOf([ListEl]) })),
		PropTypes.shape({ type: PropTypes.oneOf([ListEl]) }),
	]),
}
