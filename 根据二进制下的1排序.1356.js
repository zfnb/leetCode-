let sortByBits = function (arr) {
    const counts = new Map();
    // 对arr里的每一个数求二进制中1的数量，并存到map里
    for (let num of arr) {
        let temp = num;
        let count = 0;
        while (temp) {
            count += temp & 1;
            temp = temp >> 1;
        }
        counts.set(num, count);
    }
    return arr.sort((a, b) => {
        // 如果数字二进制中 1 的数量相同，则比较数字本身的大小
        if (counts.get(a) === counts.get(b)) {
            return a - b;
            // 如果数字二进制中 1 的数量不同，比较1的数量
        } else {
            return counts.get(a) - counts.get(b);
        }
    });
};
sortByBits([23,12]);