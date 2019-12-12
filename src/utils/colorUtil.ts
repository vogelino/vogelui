function padZero(str: string, len?: number): string {
	len = len || 2
	const zeros = new Array(len).join('0')
	return (zeros + str).slice(-len)
}

type BW = [string, string]
export function invertColor(hex: string, bw?: BW): string {
	if (hex.indexOf('#') === 0) {
		hex = hex.slice(1)
	}
	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
	}
	if (hex.length !== 6) {
		throw new Error('Invalid HEX color.')
	}
	const r = parseInt(hex.slice(0, 2), 16)
	const g = parseInt(hex.slice(2, 4), 16)
	const b = parseInt(hex.slice(4, 6), 16)
	if (bw) {
		return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? bw[1] : bw[0]
	}
	const rS = (255 - r).toString(16)
	const gS = (255 - g).toString(16)
	const bS = (255 - b).toString(16)
	return `#${padZero(rS) + padZero(gS) + padZero(bS)}`
}