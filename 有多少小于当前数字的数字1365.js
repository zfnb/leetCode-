/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nums = [1, 5, 8, 9, 3, 2, 4];
const smallerNumbersThanCurrent = function (nums) {
    const returnArr = [];
    for (let i = 0; i < nums.length; i++) {
        let length = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                length++;
            }
        }
        returnArr.push(length);
    }
    return returnArr;
};
const result = smallerNumbersThanCurrent(nums);
console.log(result);