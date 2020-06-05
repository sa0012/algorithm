// 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

// 例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323
// sort底层是快排
function PrintMinNumber (numbers) {
  if (!numbers || numbers.length <= 0) {
    return
  }

  return numbers.sort(compare).join('')
}

function compare(a, b) {
  const prev = '' + a + b
  const next = '' + b + a
  return prev - next
}

var arr = [3, 32, 321]
console.log(PrintMinNumber(arr))