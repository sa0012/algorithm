// 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回-1（需要区分大小写）
(function () {
  // indexOf/lastIndexOf的时间复杂度为O(n)，所以整体的时间复杂度为O(n2)，空间复杂度为0
  function firstNotRepeatingChat (s) {
    if (!s || s.length <= 0) return -1
    for (let i = 0; i < s.length; i++) {
      if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
        return i
      }
    }

    return i;
  }

  console.log(firstNotRepeatingChat('aavvsddeee'))
})();

(function () {
  // 两个单层for循环， 时间复杂度为2O(n), 总体趋势为O(n)
  function firstNotRepeatingChat (s) {
    if (!s || s.length <= 0) return -1
    let map = {}
    for (let i = 0; i < s.length; i++) {
      if (map[s[i]]) {
        map[s[i]]++
      } else {
        map[s[i]] = 1
      }
    }

    for (let j = 0; j < s.length; j++) {
      if (map[s[j]] === 1) {
        return j;
      }
    }
    return -1;
  }

  console.log(firstNotRepeatingChat('aavvsddeee'))
})();