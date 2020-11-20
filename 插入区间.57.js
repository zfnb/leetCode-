const intervals = [[1, 3], [6, 9]], newInterval = [2, 5];
const insert = function (intervals, newInterval) {
    intervals.push(newInterval);
    const res = [];
    if (intervals.length === 0) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    let i = 0;
    while (i < intervals.length) {
        let curLeft = intervals[i][0];
        let curRight = intervals[i][1];
        while (i < intervals.length - 1 && intervals[i + 1][0] <= curRight) {
            // 合并区间
            i++;
            curRight = Math.max(intervals[i][1], curRight);
        }
        res.push([curLeft, curRight]);
        i++;
    }
    return res;
};
const result = insert(intervals, newInterval);

console.log(result);
