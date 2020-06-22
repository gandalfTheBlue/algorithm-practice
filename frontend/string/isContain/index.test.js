const isContain = require('./isContain')

test('should return -1 if arguments are not string', () => {
	expect(isContain(1, 2)).toBe(-1)
})

test('should return 0', () => {
	expect(isContain('ab', 'abc')).toBe(0)
})

test('should return 5', () => {
	expect(isContain('ab', 'erfgabc')).toBe(4)
})

test('should return 2', () => {
	expect(isContain('ab', 'erabfgabc')).toBe(2)
})

test('should return -1', () => {
	expect(isContain('ab', 'bacdad')).toBe(-1)
})
