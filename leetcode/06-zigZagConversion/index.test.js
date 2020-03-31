const convert = require('.')

test('should return PAHNAPLSIIGYIR', () => {
  expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR')
})

test('should return PAHNAPLSIIGYIPINALSIGYAHRPIR', () => {
  expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI')
})

test('should return A', () => {
  expect(convert('A', 1)).toBe('A')
})

test('should return AB', () => {
  expect(convert('AB', 1)).toBe('AB')
})
