/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  const specials = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }

  const arr = s.split('')
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    if (specials[`${arr[i]}${arr[i + 1]}`]) {
      result += specials[`${arr[i]}${arr[i + 1]}`]
      i++
    } else {
      result += values[arr[i]]
    }
  }
  return result
}

module.exports = romanToInt
