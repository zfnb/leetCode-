/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const kClosest = (points, K) => {
    const sortArr = points.sort((a, b) => {
        return Math.sqrt(a[0] ** 2 + a[1] ** 2) - Math.sqrt(b[0] ** 2 + b[1] ** 2);
    });
    return sortArr.splice(0, K);
};
let points = [[10, -2], [2, -2], [10, 10], [9, 4], [-8, 1]];
const result = kClosest(points, 4);
console.log(result);