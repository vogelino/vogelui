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
		'&:checked ~ .checkbox-custom': {
			backgroundColor: variant,
			borderRadius: '3px',
			transform: 'rotate(0deg) scale(1)',
			opacity: 1,
			borderWidth: '1px',
			borderStyle: 'solid',
			borderColor: variant,
		},
		'&:checked ~ .checkbox-custom > .checkbox-custom-check': {
			transform: 'rotate(45deg) scale(1)',
			opacity: 1,
			left: '5px',
			top: '1px',
			width: '4px',
			height: '10px',
			borderStyle: 'solid',
			borderWidth: '0 2px 2px 0',
			borderColor: 'white',
			backgroundColor: 'transparent',
			borderRadius: 0,
			boxShadow: '0 0 0 0 transparent',
		},
		'&:not(:checked):hover ~ .checkbox-custom': !disabled && {
			backgroundColor: `${variant}ExtraLight`,
		},
		'&:focus ~ .checkbox-custom': !disabled && {
			boxShadow: `0 0 0 4px ${transparentize(0.7, theme.colors[variant])}`,
		},
	},
	checkbox: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '16px',
		width: '16px',
		backgroundColor: 'transparent',
		borderRadius: '3px',
		borderWidth: '1px',
		borderStyle: 'solid',
		borderColor: variant,
		transition: 'all 100ms ease-in',
	},
	checkmark: {
		position: 'absolute',
		content: '""',
		left: '8px',
		top: '8px',
		height: 0,
		width: 0,
		borderRadius: '3px',
		borderStyle: 'solid',
		borderColor: 'white',
		borderWidth: '0 3px 3px 0',
		transform: 'rotate(0deg) scale(0)',
		opacity: 1,
		transition: 'all 100ms ease-in',
	},
})

const Checkbox = ({
	label = '',
	variant = 'primary',
	defaultChecked = false,
	...props
}) => {
	const { theme } = useThemeUI()
	const disabled = variant === 'disabled'
	const styles = getStyles({ theme, variant: disabled ? 'grey' : variant, disabled })
	return (
		<Styled.div as="label" sx={styles.label}>
			<Styled.div
				as="input"
				type="checkbox"
				sx={styles.input}
				disabled={disabled}
				defaultChecked={defaultChecked}
				{...props}
			/>
			<Styled.div as="span" className="checkbox-custom" sx={styles.checkbox}>
				<Styled.div
					as="span"
					className="checkbox-custom-check"
					sx={styles.checkmark}
				/>
			</Styled.div>
			{label}
		</Styled.div>
	)
}

Checkbox.propTypes = {
	label: PropTypes.string,
	disabled: PropTypes.bool,
	defaultChecked: PropTypes.bool,
	variant: PropTypes.oneOf(['primary', 'disabled', 'error', 'success', 'warning']),
}

export default Checkbox
