/**
 * @param {string} s
 * @return {string}
 */
// cbbd
// var longestPalindrome = function(s) {
//   if (!s || s === "") return s;

//   let map = new Map();
//   s.split("").forEach((char, index) => (map[index] = char));
//   for (let maxLen = s.length; maxLen > 0; maxLen--) {
//     for (let j = 0; j < s.length - maxLen + 1; j++) {
//       let isMaxLen = true;
//       let start = j;
//       let end = maxLen + j - 1;
//       while (start < end) {
//         if (map[start] !== map[end]) {
//           isMaxLen = false;
//           break;
//         }
//         start++;
//         end--;
//       }
//       if (isMaxLen) {
//         return s.substring(j, maxLen + j);
//       }
//     }
//   }
//   return s[0];
// };
//aaabaaaa
var longestPalindrome = function(s) {
  if (!s || s === "") return s;

  let result = s[0];
  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i + 1;
    let isOddPalindrome = true;
    let isEvenPalindrome = true;
    while (isOddPalindrome || isEvenPalindrome) {
      if (isOddPalindrome && s[left - 1] === s[right]) {
        if (right - left + 2 > result.length) {
          result = s.substring(left - 1, right + 1);
        }
      }
      if (isEvenPalindrome && s[left] === s[right]) {
        if (right - left + 1 > result.length) {
          result = s.substring(left, right + 1);
        }
      }

      if (isOddPalindrome) {
        if (s[left - 1] !== s[right] || left === 0 || right === s.length - 1) {
          isOddPalindrome = false;
        }
      }
      if (isEvenPalindrome) {
        if (s[left] !== s[right] || left === 0 || right === s.length - 1) {
          isEvenPalindrome = false;
        }
      }

      left--;
      right++;
    }
  }
  return result;
};

module.exports = longestPalindrome;
