
import add from './add.js'

describe('When given 2 numbers', () => {
	it('Returns sum of those 2 numbers', () => {
		const result = add(2, 19);
		const expected = 21;

		expect(result).toEqual(expected);
	})
})