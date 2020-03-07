const romanToInt = require('.')

test('should return 1994', () => {
  expect(romanToInt('MCMXCIV')).toBe(1994)
})
