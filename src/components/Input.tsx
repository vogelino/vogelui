/** @jsx jsx */
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { ReactElement, useState, useRef, RefObject } from 'react'

const useFocus = (): [RefObject<{ current?: { focus: Function } | null }>, Function] => {
	const htmlElRef = useRef({ current: null, focus: (): undefined => undefined })
	const setFocus = (): void => {
		htmlElRef.current && htmlElRef.current.focus()
	}

	return [htmlElRef, setFocus]
}

type InputProps = {
	value?: string
	initialValue?: string
	placeholder?: string
	size?: 's' | 'm' | 'l'
	variant?: 'default' | 'primary' | 'success' | 'error' | 'warning' | 'disabled'
	type?: 'text' | 'email' | 'password' | 'number' | 'phone'
	onChange?: Function
}

const Input = ({
	initialValue = '',
	value,
	placeholder = 'Type something',
	size = 'm',
	variant = 'default',
	type = 'text',
	onChange,
}: InputProps): ReactElement => {
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
			}}
			onClick={(): void => setInputFocus(true)}
		>
			<Styled.div
				as="input"
				value={finalValue}
				placeholder={placeholder}
				onChange={(evt): undefined => changeHandler(evt.target.value)}
				onFocus={(): void => setFocus(true)}
				onBlur={(): void => setFocus(false)}
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
		</Styled.div>
	)
}

export default Input
