var moveZeroes = function (nums) {
    nums.reduce((p, v, i) => {
        // 如果当期元素不为0
        if (v !== 0) {
            // 交换当前元素和p元素的位置
            [nums[p], nums[i]] = [nums[i], nums[p]];
            ++p;
        }
        return p;
    }, 0);
};

let arr = [1, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr);