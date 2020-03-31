/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert = function(s, numRows) {
//   if (numRows <= 1) return s
//   const str = [...s]
//   let temp = []
//   let rowLeng = (str.length / (2 * numRows - 2)) * (numRows - 1)
//   for (let i = 0; i < numRows; i++) {
//     temp.push([])
//   }

//   let index = 0
//   for (let k = 0; k < rowLeng; k++) {
//     const m = k % (numRows - 1)
//     if (m === 0) {
//       for (let j = 0; j < numRows; j++) {
//         temp[j][k] = str[index++]
//       }
//     } else {
//       temp[numRows - 1 - m][k] = str[index++]
//     }
//   }

//   let result = ''
//   for (let k = 0; k < numRows; k++) {
//     for (let j = 0; j < rowLeng; j++) {
//       if (temp[k][j]) {
//         result += temp[k][j]
//       }
//     }
//   }

//   return result
// }

var convert = function(s, numRows) {
  if (numRows <= 1) return s
  let temp = []

  const iterateNum = 2 * numRows - 2
  for (let k = 0; k < s.length; k++) {
    const remainder = k % iterateNum
    let tempIndex = remainder < numRows ? remainder : iterateNum - remainder
    if (!temp[tempIndex]) {
      temp[tempIndex] = ''
    }
    temp[tempIndex] += s.charAt(k)
  }

  return temp.join('')
}

module.exports = convert
