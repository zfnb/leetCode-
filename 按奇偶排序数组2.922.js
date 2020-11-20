let sortArrayByParityII = function (A) {
    const res = [];
    let i = 0;
    // 偶数位置装填
    for (const ele of A) {
        // 如果ele是偶数，将ele装填到res的i位置上，并将i指针移到下一个偶数位
        if ((ele & 1) === 0) {
            res[i] = ele;
            i = i + 2;
        }
    }
    // i指针置为1
    i = 1;
    // 如果ele是奇数，将ele装填到res的i位置上，并将i指针移到下一个奇数位
    for (const ele of A) {
        if ((ele & 1) !== 0) {
            res[i] = ele;
            i = i + 2;
        }
    }
    return res;
};
console.log(sortArrayByParityII([4, 2, 5, 7]));  