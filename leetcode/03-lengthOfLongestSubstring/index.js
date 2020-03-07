/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//   if (!s || s.length === 0) return 0

//   let result = 0
//   let tempSubstring = ''

//   for (let i = 0; i < s.length; i++) {
//     tempSubstring = s[i]
//     for (let j = i + 1; j < s.length; j++) {
//       if (tempSubstring.indexOf(s[j]) < 0) {
//         tempSubstring += s[j]
//       } else {
//         if (tempSubstring.length > result) {
//           result = tempSubstring.length
//         }
//         tempSubstring = ''
//         break
//       }
//       if (j === s.length - 1 && tempSubstring.length > result) {
//         result = tempSubstring.length
//       }
//     }
//   }

//   if (tempSubstring.length > result) {
//     return tempSubstring.length
//   }

//   return result
// }

var lengthOfLongestSubstring = function(s) {
  if (!s || s.length === 0) return 0

  //aabaab!bb
  let start = 0
  let maxLen = 0
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    const curr = s[i]
    const isDuplicate = map[curr] > -1
    const includeCurrent = isDuplicate && map[curr] >= start ? 0 : 1
    if (i - start + includeCurrent > maxLen) {
      maxLen = i - start + includeCurrent
    }
    if (isDuplicate && map[curr] + 1 > start) {
      start = map[curr] + 1
    }
    map[curr] = i
  }

  return maxLen
}

module.exports = lengthOfLongestSubstring
