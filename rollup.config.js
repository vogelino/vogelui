import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import { uglify } from 'rollup-plugin-uglify'
import packageJSON from './package.json'

const input = './src/index.js'
const minifyExtension = (pathToFile) => pathToFile.replace(/\.js$/, '.min.js')

const resolvePlugin = resolve({ extensions: ['.mjs', '.js', '.jsx', '.json'] })
const babelPlugin = babel()
const externalPlugin = external()
const terserPlugin = terser()
const uglifyPlugin = uglify()
const commonjsPlugin = commonjs({
	extensions: ['.js'],
	namedExports: {
		'node_modules/react-is/index.js': ['ForwardRef'],
		'node_modules/prop-types/index.js': ['elementType'],
	},
})

const commonPlugins = [resolvePlugin, babelPlugin, externalPlugin, commonjsPlugin]

export default [
	// CommonJS
	{
		input,
		output: {
			file: packageJSON.main,
			format: 'cjs',
			sourcemap: true,
		},
		plugins: commonPlugins,
	},
	{
		input,
		output: {
			file: minifyExtension(packageJSON.main),
			format: 'cjs',
			sourcemap: true,
		},
		plugins: [...commonPlugins, uglifyPlugin],
	},
	// UMD
	{
		input,
		output: {
			file: packageJSON.browser,
			format: 'umd',
			name: 'vogelui',
			globals: {
				react: 'React',
				'react-dom': 'ReactDOM',
			},
		},
		plugins: commonPlugins,
	},
	{
		input,
		output: {
			file: minifyExtension(packageJSON.browser),
			format: 'umd',
			name: 'vogelui',
			globals: {
				react: 'React',
				'react-dom': 'ReactDOM',
			},
		},
		plugins: [...commonPlugins, terserPlugin],
	},
	{
		input,
		output: {
			file: packageJSON.module,
			format: 'es',
			exports: 'named',
		},
		plugins: commonPlugins,
	},
	{
		input,
		output: {
			file: minifyExtension(packageJSON.module),
			format: 'es',
			exports: 'named',
		},
		plugins: [...commonPlugins, terserPlugin],
	},
]
