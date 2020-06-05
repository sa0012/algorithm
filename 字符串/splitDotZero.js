// 去除小数最后的 “0”
// 例如：0.00 -> 0, 2.010 -> 2.01

function splitDotLastZero (number) {
  if (!number) return
  return (number).toString().replace(/(?:\.0*|(\.\d+?)0+)$/, '')
}

console.log(splitDotLastZero(0.10))
console.log(splitDotLastZero(10.00))