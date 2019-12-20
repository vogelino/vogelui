import typography from './typography'

export type Theme = {
	fonts?: {
		body?: string
		heading?: string
		monospace?: string
	}
	colors?: {
		text?: string
		background?: string
		primary?: string
	}
	typography?: {}
	styles?: {}
}

const theme: Theme = {
	...typography,
	colors: {
		text: '#000',
		background: '#fff',
		primary: '#33e',
	},
	styles: {
		root: {
			fontFamily: 'body',
		},
	},
}

export default theme
