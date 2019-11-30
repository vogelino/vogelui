module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['react', '@typescript-eslint', 'prettier'],
	settings: {
		react: {
			pragma: 'React',
			version: 'detect',
		},
	},
	rules: {
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
		'react/jsx-props-no-spreading': 'off',
		'no-tabs': 'off',
		indent: 'off',
		'react/jsx-indent': 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		semi: ['error', 'never'],
	},
}
