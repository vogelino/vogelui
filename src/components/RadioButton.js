/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { transparentize } from 'polished'

const getStyles = ({ theme, variant, disabled }) => ({
	label: {
		position: 'relative',
		paddingLeft: 6,
		cursor: disabled ? 'not-allowed' : 'pointer',
		color: disabled ? 'grey' : 'inherit',
	},
	input: {
		opacity: 0,
		position: 'absolute',
		'&:checked ~ .radio-custom': {
			backgroundColor: variant,
			borderRadius: '50%',
			borderWidth: '1px',
			borderStyle: 'solid',
			borderColor: variant,
		},
		'&:checked ~ .radio-custom > .radio-custom-dot': {
			transform: 'scale(.5)',
			opacity: 1,
			backgroundColor: `${variant}UltraLight`,
		},
		'&:not(:checked):hover ~ .radio-custom': !disabled && {
			backgroundColor: `${variant}ExtraLight`,
		},
		'&:focus ~ .radio-custom': !disabled && {
			boxShadow: `0 0 0 4px ${transparentize(0.7, theme.colors[variant])}`,
		},
	},
	radio: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '16px',
		width: '16px',
		backgroundColor: 'transparent',
		borderRadius: '50%',
		borderWidth: '1px',
		borderStyle: 'solid',
		borderColor: variant,
		transition: 'all 100ms ease-in',
	},
	dot: {
		position: 'absolute',
		content: '""',
		left: 0,
		top: 0,
		height: '16px',
		width: '16px',
		borderRadius: '50%',
		backgroundColor: 'white',
		transform: 'scale(1)',
		opacity: 0,
		transition: 'all 100ms ease-in',
	},
})

let idStack = 0
const Radio = ({
	label = '',
	variant = 'primary',
	defaultChecked = false,
	id,
	...props
}) => {
	const { theme } = useThemeUI()
	const disabled = variant === 'disabled'
	const styles = getStyles({ theme, variant: disabled ? 'grey' : variant, disabled })
	const finalId = id || `checkbox-${idStack++}`
	return (
		<Styled.div sx={styles.label} as="label" htmlFor={finalId}>
			<Styled.div
				as="input"
				type="radio"
				sx={styles.input}
				disabled={disabled}
				defaultChecked={defaultChecked}
				id={finalId}
				{...props}
			/>
			<Styled.div as="span" className="radio-custom" sx={styles.radio}>
				<Styled.div as="span" className="radio-custom-dot" sx={styles.dot} />
			</Styled.div>
			{label}
		</Styled.div>
	)
}

Radio.propTypes = {
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	label: PropTypes.string,
	disabled: PropTypes.bool,
	defaultChecked: PropTypes.bool,
	variant: PropTypes.oneOf(['primary', 'disabled', 'error', 'success', 'warning']),
}

export default Radio
