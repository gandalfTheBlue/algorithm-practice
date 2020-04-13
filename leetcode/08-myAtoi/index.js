/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  if (!str) return 0;

  str = str.trim();
  const regex = /^[0-9]+$/;
  const firstChar = str.charAt(0);
  if (!regex.test(firstChar) && !["+", "-"].includes(firstChar)) {
    return 0;
  }

  let result = firstChar;

  let i = 1;
  while (i < str.length) {
    const currentChar = str.charAt(i);
    if (!regex.test(currentChar)) {
      break;
    }
    result += currentChar;
    i++;
  }

  if (isNaN(result)) return 0;

  result = Number(result);
  const temp = Math.pow(2, 31);
  const MaxNum = temp - 1;
  const MinNum = -temp;

  if (result > MaxNum) return MaxNum;
  if (result < MinNum) return MinNum;
  return result;
};

module.exports = myAtoi;
