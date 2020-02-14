// 请使用最基本的遍历来实现判断字符串 a 是否被包含在字符串 b 中，并返回第一次出现的位置（找不到返回 -1）。

// a = "34";
// b = "1234567"; // 返回 2
// a = "35";
// b = "1234567"; // 返回 -1
// a = "355";
// b = "12354355"; // 返回 5
// isContain(a, b);

function isContain(a, b) {
  if (typeof a !== "string" || typeof b !== "string") {
    throw new Error("Please pass strings as arguments.");
  }

  for (let i = 0; i < b.length; i++) {
    let result = true;
    for (let j = 0; j < a.length; j++) {
      if (a[j] !== b[i + j]) {
        result = false;
        break;
      }
    }
    if (result) {
      return i;
    }
  }

  return -1;
}
