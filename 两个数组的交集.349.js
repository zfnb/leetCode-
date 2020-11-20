/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// let intersection = function (nums1, nums2) {
//     const n1 = Array.from(new Set(nums1));
//     const n2 = Array.from(new Set(nums2));
//     const res = [];
//     if (n1.length > n2.length) {
//         n2.forEach(n => {
//             if (n1.indexOf(n) !== -1) {
//                 res.push(n);
//             }
//         });
//     } else {
//         n1.forEach(n => {
//             if (n2.indexOf(n) !== -1) {
//                 res.push(n);
//             }
//         });
//     }
//     return res;
// };
let intersection = function (nums1, nums2) {
    const map = new Map();
    const res = [];
    nums1.forEach(n => {
        map.set(n, true);
    });
    nums2.forEach(n => {
        if (map.has(n)) {
            res.push(n);
            map.delete(n);
        }
    });
    return res;
};
const nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4];
const res = intersection(nums1, nums2);
console.log(res);