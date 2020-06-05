// 千分位切割
function parseToNum(number) {
  if (!number) return
  var reg = /(?<=\d)(?<!\.\d*)(?=(\d{3})+(\.|$))/g;
  return (number).toString().replace(reg, ',')
}

console.log(parseToNum(10000000000000.111))