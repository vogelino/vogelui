module.exports = {
	extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {},
		},
	},
	rules: {
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'react/jsx-props-no-spreading': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-tabs': 'off',
		indent: 'off',
		'react/jsx-indent': 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		'import/prefer-default-export': 'off',
		semi: ['error', 'never'],
	},
}
