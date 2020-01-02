import typography from './typography'
import colors from './colors'
import buttons from './button'
import inputs from './input'

export type Theme = {
	breakpoints?: string[] | number[]
	space: number[]
	fonts?: {
		[key: string]: string
	}
	colors?: {
		[key: string]: string
	}
	typography?: {}
	buttons?: {}
	inputs?: {}
	styles?: {}
}

const theme: Theme = {
	breakpoints: ['40em', '52em', '64em'],
	space: [0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 72, 80, 128, 256, 512],
	...typography,
	colors,
	styles: {
		root: {
			fontFamily: 'body',
			fontSize: 'body',
		},
	},
	buttons,
	inputs,
}

export default theme
