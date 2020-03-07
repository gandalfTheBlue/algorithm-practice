/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s || s.length === 0) return 0

  let result = 0
  let tempSubstring = ''

  for (let i = 0; i < s.length; i++) {
    tempSubstring = s[i]
    for (let j = i + 1; j < s.length; j++) {
      if (tempSubstring.indexOf(s[j]) < 0) {
        tempSubstring += s[j]
      } else {
        if (tempSubstring.length > result) {
          result = tempSubstring.length
        }
        tempSubstring = ''
        break
      }
      if (j === s.length - 1 && tempSubstring.length > result) {
        result = tempSubstring.length
      }
    }
  }

  if (tempSubstring.length > result) {
    return tempSubstring.length
  }

  return result
}

module.exports = lengthOfLongestSubstring
