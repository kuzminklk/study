

import divide from "./calculator";


describe('when given 2 numbers', () => {
		it('returns the result of dividing the first by the second', () => {
				const testCases = [
						{ a: 10, b: 5, expected: 2 },
						{ a: 15, b: 5, expected: 3 },
						{ a: 9, b: 3, expected: 3 },
				]

				testCases.forEach(({a, b, expected}) => {
			const result = divide(a,b);
			expect(result).toEqual(expected);
		})
		})
})

describe('when given 2 numbers that cannot be equally divided', () => {
	it('should return the division result with 1 digit after the decimal point', () => {
		const result = divide(10, 3)
		const expected = 3.3
		expect(result).toEqual(expected)
	})
})

describe('when given a precision value', () => {
	it('should return the division result with as many decimal places as there are in the settings', () => {
		const result = divide(10, 3, { precision: 2 })
		const expected = 3.33
		expect(result).toEqual(expected)
	})
})

describe('when tried to divide by 0', () => {
	it('should throw an error', () => {
		const attempt = () => divide(10, 0);
		expect(attempt).toThrow("I'm sorry, Dave. I'm afraid I can't do that.");
		
	})
})