import typography from './typography'

export type Theme = {
	breakpoints?: string[] | number[]
	space: number[]
	fonts?: {
		body?: string
		heading?: string
		monospace?: string
	}
	colors?: {
		text?: string
		background?: string
		primary?: string
		disabled?: string
	}
	typography?: {}
	styles?: {}
}

const theme: Theme = {
	breakpoints: ['40em', '52em', '64em'],
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	...typography,
	colors: {
		text: '#000',
		background: '#fff',
		primary: '#33e',
		disabled: '#aaa',
	},
	styles: {
		root: {
			fontFamily: 'body',
		},
	},
}

export default theme
