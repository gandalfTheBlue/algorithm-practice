const lengthOfLongestSubstring = require('.')

test('should return 3', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
})

test('should return 1', () => {
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
})

test('should return 3', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
})

test('should return 1', () => {
  expect(lengthOfLongestSubstring(' ')).toBe(1)
})

test('should return 1', () => {
  expect(lengthOfLongestSubstring('a')).toBe(1)
})

test('should return 2', () => {
  expect(lengthOfLongestSubstring('au')).toBe(2)
})

test('should return 3', () => {
  expect(lengthOfLongestSubstring('dvdf')).toBe(3)
})
