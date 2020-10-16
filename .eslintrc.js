module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
	],
	parser: 'babel-eslint',
	plugins: ['react', 'prettier'],
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
		semi: ['error', 'never'],
		'react/display-name': ['off', { ignoreTranspilerName: false }],
	},
}
