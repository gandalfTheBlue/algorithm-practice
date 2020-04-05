/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const sign = x < 0 ? -1 : 1
  const maxNumber = Math.pow(2, 31) - 1
  const newNum = Number(
    Math.abs(x)
      .toString()
      .split('')
      .reverse()
      .join('')
  )
  if (newNum > maxNumber) {
    return 0
  }
  return newNum * sign
}

module.exports = reverse
