/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { useState, useRef } from 'react'
import Icon from './Icon'
import { inputVariantProp, inputSizeProp } from '../theme/input'

const useFocus = () => {
	const htmlElRef = useRef({ current: null, focus: () => undefined })
	const setFocus = () => {
		htmlElRef.current && htmlElRef.current.focus()
	}

	return [htmlElRef, setFocus]
}

const Input = ({
	initialValue = '',
	value,
	placeholder = 'Type something',
	size = 'm',
	variant = 'default',
	type = 'text',
	iconLeft,
	iconRight,
	onChange,
}) => {
	const [internalValue, setValue] = useState(initialValue)
	const [hasFocus, setFocus] = useState(false)
	const [inputRef, setInputFocus] = useFocus()
	const { theme } = useThemeUI()
	const changeHandler = onChange || setValue
	const finalValue = value || internalValue

	return (
		<Styled.div
			as="span"
			sx={{
				...theme.inputs[variant],
				...theme.inputs.sizes[size],
				...(hasFocus ? theme.inputs[variant]['&:focus'] : {}),
				paddingTop: 0,
				paddingBottom: 0,
				display: 'flex',
			}}
			onClick={() => setInputFocus(true)}
		>
			{iconLeft && <Icon defaultColor="disabled" position="left" icon={iconLeft} />}
			<Styled.div
				as="input"
				value={finalValue}
				placeholder={placeholder}
				onChange={(evt) => changeHandler(evt.target.value)}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				type={type}
				disabled={variant === 'disabled'}
				ref={inputRef}
				sx={{
					...theme.inputs[variant],
					...theme.inputs.sizes[size],
					border: 0,
					boxShadow: 'none',
					background: 'none',
					paddingLeft: 0,
					paddingRight: 0,
					'&:hover': {
						border: 0,
						boxShadow: 'none',
						background: 'none',
					},
					'&:focus': {
						border: 0,
						boxShadow: 'none',
						background: 'none',
					},
				}}
			/>
			{iconRight && (
				<Icon defaultColor="disabled" position="right" icon={iconRight} />
			)}
		</Styled.div>
	)
}

Input.propTypes = {
	initialValue: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	variant: inputVariantProp,
	type: PropTypes.oneOf(['text', 'email', 'password', 'phone']),
	size: inputSizeProp,
	iconLeft: Icon.propTypes.icon,
	iconRight: Icon.propTypes.icon,
	onChange: PropTypes.func,
}

export default Input
