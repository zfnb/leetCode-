const threeSum = function (numbers) {
    // 定义返回结果数组
    let res = [];
    // 参数数组长度
    let length = numbers.length;
    // 排序
    numbers.sort((a, b) => a - b);
    // console.log("排序后", numbers); // [-2, -1, -1, 0, 0,  1,  1]
    // 第一个元素小于零，最后一个元素大于零(不能没有负数，或者没有正数)
    for (let i = 0; i < length - 1;) {
        // i为0 第一个数字应给小于等于0
        if (numbers[i] > 0) break;
        // sec 第二个数字
        let sec = i + 1;
        // last最后一个数字
        let last = length - 1;
        do {
            // 如果第二个数字大于等于最后一个数字，或者第一个数字和最后一个数字同符号，break循环
            if (sec >= last || numbers[i] * numbers[last] > 0) break;
            // 结果等于第一个数，第二个数，最后一个数相加
            let result = numbers[i] + numbers[sec] + numbers[last];
            // 如果三数之和等于0，push到结果数组中
            if (result === 0) {
                res.push([numbers[i], numbers[sec], numbers[last]]);
            }
            // 如果结果小于等于0
            if (result <= 0) {
                // 如果第二个数字小于最后一个数字 ,sec(右移) 直到sec和下一个数字不相等
                while (sec < last && numbers[sec] === numbers[++sec]);
            } else {
                // 如果第二个数字大于最后一个数字 ,last(左移) 直到last和上一个数字不相等
                while (sec < last && numbers[last] === numbers[--last]);
            }
            // sec < last 进行do循环
        } while (sec < last);
        // 如果i的值等于i下一个值，i++
        while (numbers[i] === numbers[++i]);
    }
    // 返回结果数组
    return res;
};
const numbers = [0, 1, -1, 0, 1, -1, -2];
const result = threeSum(numbers);
console.log(result);