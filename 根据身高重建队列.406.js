/**
 * @param {number[][]} people
 * @return {number[][]}
 */
let reconstructQueue = function (people) {
    if (!people) return [];
    const res = [];
    people.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return b[0] - a[0];
        }
    });
    people.forEach(item => {
        res.splice(item[1], 0, item);
    });
    return res;
};
console.log(reconstructQueue([[7, 0], [4, 1], [7, 1], [5, 0], [6, 1], [5, 2]]));