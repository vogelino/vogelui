/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { ReactElement, useState } from 'react'

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
	const changeHandler = onChange || setValue
	const finalValue = value || internalValue
	return (
		<Styled.div
			as="input"
			value={finalValue}
			placeholder={placeholder}
			onChange={(evt): undefined => changeHandler(evt.target.value)}
			type={type}
			sx={{ variant: [`inputs.${variant}`, `inputs.sizes.${size}`] }}
		/>
	)
}

export default Input
