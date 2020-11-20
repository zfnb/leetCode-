let allCellsDistOrder = function (R, C, r0, c0) {
    let arr = [];
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            let a = Math.abs(i - r0) + Math.abs(j - c0);
            arr.push([i, j, a]);
        }
    }
    arr.sort((a, b) => {
        return a[2] - b[2];
    });
    arr.map(el => {
        el.length = 2;
        return el;
    });
    return arr;
};
let R = 2, C = 2, r0 = 0, c0 = 1;
console.log(allCellsDistOrder(R, C, r0, c0));