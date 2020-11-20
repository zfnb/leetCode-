/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s: string): number {
    let maxLength: number = 0;
    let strArr: string[] = [];
    for (let i = 0; i < s.length; i++) {
        const index: number = strArr.indexOf(s[i]);
        if (index === -1) {
            // 数组arr中没有这个元素
            strArr.push(s[i]);
            maxLength = Math.max(maxLength, strArr.length);
        } else {
            // 数组arr中有这个元素
            strArr = strArr.slice(index + 1);
            strArr.push(s[i]);
        }
    }
    return maxLength;
};
const result1 = lengthOfLongestSubstring("abcabcbb");
console.log(result1);
