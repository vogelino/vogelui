import typography from './typography'
import colors from './colors'

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
	styles?: {}
}

const theme: Theme = {
	breakpoints: ['40em', '52em', '64em'],
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	...typography,
	colors,
	styles: {
		root: {
			fontFamily: 'body',
		},
	},
}

export default theme
