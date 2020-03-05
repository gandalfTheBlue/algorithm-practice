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
    const nextTwo = `${arr[i]}${arr[i + 1]}`
    if (specials[nextTwo]) {
      result += specials[nextTwo]
      i++
    } else {
      result += values[arr[i]]
    }
  }
  return result
}

const romanToInt = s => {
  if (!s || s.length === 0) {
    return 0
  }

  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ])

  let i = s.length - 1
  let result = map.get(s[i])

  while (i > 0) {
    const curr = map.get(s[i])
    const prev = map.get(s[i - 1])

    if (prev >= curr) {
      result += prev
    } else {
      result -= prev
    }

    i--
  }

  return result
}

module.exports = romanToInt
