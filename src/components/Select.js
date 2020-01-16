/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, useThemeUI } from 'theme-ui'
import ReactSelect from 'react-select'
import { lighten, darken, transparentize } from 'polished'

const getTheme = (theme) => (reactSelectTheme) => ({
	...reactSelectTheme,
	borderRadius: theme.inputs.primary.borderRadius,
	colors: {
		primary: theme.colors.primary,
		primary75: theme.colors.primaryLight,
		primary50: theme.colors.primaryExtraLight,
		primary25: theme.colors.primaryUltraLight,
		danger: theme.colors.error,
		dangerLight: theme.colors.errorExtraLight,
		neutral0: theme.colors.white,
		neutral5: theme.colors.greyUltraLight,
		neutral10: lighten(0.1, theme.colors.greyExtraLight),
		neutral20: theme.colors.greyExtraLight,
		neutral30: theme.colors.greyLight,
		neutral40: lighten(0.1, theme.colors.grey),
		neutral50: theme.colors.grey,
		neutral60: darken(0.1, theme.colors.grey),
		neutral70: theme.colors.greyDark,
		neutral80: darken(0.1, theme.colors.greyDark),
		neutral90: theme.colors.greyExtraDark,
	},
})

const getStyles = (variant, theme) => ({
	container: (provided) => ({
		...provided,
		fontFamily: theme.fonts[theme.inputs[variant].fontFamily],
		lineHeight: theme.lineHeights[theme.inputs[variant].lineHeight],
		letterSpacing: theme.letterSpacing[theme.inputs[variant].letterSpacing],
		userSelect: theme.inputs[variant].userSelect,
		'input::selection': theme.inputs[variant]['&::selection'],
	}),
	control: (provided, state) => ({
		...provided,
		borderColor: theme.colors[theme.inputs[variant].borderColor],
		boxShadow: state.isFocused ? `0 0 0 1px ${theme.colors[variant]}` : 'none',
		transition: theme.inputs[variant].transition,
		...(state.isFocused ? theme.inputs[variant]['&:focus'] : {}),
		'&:hover': theme.inputs[variant]['&:hover'],
		cursor: state.isDisabled ? 'not-allowed' : 'pointer',
	}),
	placeholder: () => ({
		color: theme.colors[theme.inputs[variant]['&::placeholder'].color],
	}),
	option: (provided, state) => ({
		...provided,
		cursor: !state.isDisabled && 'pointer',
		'&:hover': {
			color: !state.isSelected && theme.colors.primary,
		},
	}),
	multiValue: (styles, { isDisabled }) => ({
		...styles,
		...(!isDisabled
			? { backgroundColor: transparentize(0.8, theme.colors[variant]) }
			: {}),
	}),
	multiValueLabel: (styles, { isDisabled }) => ({
		...styles,
		color: !isDisabled ? theme.colors[variant] : theme.colors.grey,
	}),
	multiValueRemove: (styles, { isDisabled }) => ({
		...styles,
		color: !isDisabled ? theme.colors[variant] : theme.colors.grey,
		...(!isDisabled
			? {
					':hover': {
						backgroundColor: theme.colors[variant],
						color: 'white',
					},
			  }
			: {}),
	}),
})

const Select = ({ isSearchable = false, variant = 'primary', ...props }) => {
	const { theme } = useThemeUI()
	return (
		<ReactSelect
			{...props}
			isSearchable={isSearchable}
			theme={getTheme(theme)}
			styles={getStyles(variant, theme)}
		/>
	)
}

Select.propTypes = {
	...ReactSelect.propTypes,
	isSearchable: PropTypes.bool,
	variant: PropTypes.oneOf(['primary', 'error', 'success', 'warning']),
}

export default Select
