const longestPalindrome = require('.')

test('should return ababa', () => {
  expect(longestPalindrome('ababa')).toBe('ababa')
})

test('should return a', () => {
  expect(longestPalindrome('a')).toBe('a')
})

test('should return bb', () => {
  expect(longestPalindrome('cbbd')).toBe('bb')
})
