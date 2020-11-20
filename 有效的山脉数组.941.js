let validMountainArray = function (A) {
    for (let i = 0; i < A.length;) {
        // 如果没有上坡开始，返回false
        if (A[1] < A[0]) {
            return false;
        }
        // 开始上坡
        while (A[i + 1] > A[i]) {
            i++;
        }
        // 如果没有下坡，返回false
        if (!A[i + 1]) {
            return false;
        }
        // 开始下坡
        while (A[i + 1] < A[i]) {
            i++;
        }
        // 最少三个数字
        if (i < 2) return false;
        // 到达这里数组已经完成了上坡下坡，如果此时的i不等于数组的索引长度，说明数组还有元素(重新上坡元素)返回false
        if (i === A.length - 1) {
            // 符合山脉数据
            return true;
        } else {
            return false;
        }
    }
    return false;
};
const arr = [3, 6, 5, 9];
const result = validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
console.log(result);