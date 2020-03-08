/**
 * @param {string} s
 * @return {string}
 */
// cbbd
var longestPalindrome = function(s) {
  let map = new Map()
  s.split('').forEach((char, index) => (map[index] = char))
  for (let maxLen = s.length; maxLen > 0; maxLen--) {
    for (let j = 0; j < s.length - maxLen + 1; j++) {
      let isMaxLen = true
      let start = j
      let end = maxLen + j - 1
      for (; start < Math.floor(maxLen / 2) + j; ) {
        if (map[start] !== map[end]) {
          isMaxLen = false
          break
        }
        start++
        end--
      }
      if (isMaxLen) {
        const result = s.substring(j, maxLen + j)
        return result
      }
    }
  }
  return s[0]
}

module.exports = longestPalindrome
