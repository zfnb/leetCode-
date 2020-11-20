/**
 * @param {number[]} A
 * @return {number}
 */
const A = [2, 1, 4, 7, 3, 2, 5];
const longestMountain = function (A) {
    // 设置返回结果
    let result = 0;
    // 循环A数组
    for (let i = 0; i < A.length;) {
        // 设置山脉长度
        let length = 1;
        // 如果数组元素下一个小于当前元素，直接索引右移，跳出本次循环
        if (A[i + 1] < A[i]) {
            i++;
            continue;
        }
        // 上坡 如果数组下一个元素大于当前元素，元素索引右移，山脉长度加一
        while (A[i + 1] > A[i]) {
            i++;
            length++;
        }
        // 如果索引下一个元素等于undefined或者等于当前元素，说明，跳出本次循环，索引右移
        if (A[i + 1] === undefined || A[i + 1] === A[i]) {
            i++;
            continue;
        }
        // 下坡 如果数组下一个元素小于当前元素，元素索引右移，山脉长度加一
        while (A[i + 1] < A[i]) {
            i++;
            length++;
        }
        // 如果length大于result，并且length>=3将result更新为length
        if (length > result && length >= 3) {
            result = length;
        }
    }
    // 将结果返回
    return result;
};
const number = longestMountain(A);
console.log(number);