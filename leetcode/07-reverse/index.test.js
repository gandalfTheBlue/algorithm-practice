const reverse = require('.')

test('should return 3', () => {
  expect(reverse(3)).toBe(3)
})

test('should return 12', () => {
  expect(reverse(210)).toBe(12)
})

test('should return 0', () => {
  expect(reverse(Math.pow(9, 14))).toBe(0)
})

test('should return -123', () => {
  expect(reverse(-321)).toBe(-123)
})

test('should return 0', () => {
  expect(reverse(1563847412)).toBe(0)
})
