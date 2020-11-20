const merge = function (intervals) {
  let res = [];
  // sort
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  // 循环二维数组
  for (let i = 0; i < intervals.length; i++) {
    // 设置pre 表示结果res的最后一项
    const pre = res[res.length - 1];
    // 如果第一次进入判断，或者二维数组的第i个元素的第一项大于结果数组最后一个元素的第二项
    if (i === 0 || intervals[i][0] > pre[1]) {
      // 将二维数组的这个元素加入到结果
      res.push(intervals[i]);
    } else {
      // 否则，代表二维数组的第i个元素的第一项小于等于上一个元素的第二项，(进行合并)
      // 将上一个元素的第二项设置为pre(1)和intervals[i]的较大值
      pre[1] = Math.max(pre[1], intervals[i][1]);
    }
  }
  return res;
};
const intervals = [
  [4, 6],
  [6, 10],
  [11, 20]
];
const result = merge(intervals);
console.log(result);