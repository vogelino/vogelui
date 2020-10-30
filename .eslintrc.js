module.exports = {
	env: {
		node: true,
		es6: true,
		'jest/globals': true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:jest/recommended',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			jest: true,
		},
	},
	plugins: ['react', 'prettier', 'jest'],
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
	globals: {
		window: 'readonly',
	},
}
