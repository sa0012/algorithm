// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分
(function() {
  function reOrderArray(array) {
    if (!array || array.length <= 0) return;
    const len = array.length;
    let singleNum = [];
    let doubleNum = [];
    for (let i = 0; i < len; i++) {
      if (array[i] % 2 === 0) {
        doubleNum.push(array[i]);
      } else {
        singleNum.push(array[i]);
      }
    }

    return singleNum.concat(doubleNum);
  }
  console.log(reOrderArray([1, 2, 3, 4, 5, 6, 7, 8]));
})();
