
const defaultSettings = { precision: 1 }

export default function divide(a, b, settings = defaultSettings) {
	if (b === 0) throw new Error("I'm sorry, Dave. I'm afraid I can't do that.")
	const { precision } = settings;
	return Number((a / b).toFixed(precision));
}