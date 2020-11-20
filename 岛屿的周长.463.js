/* @param { number[][] } grid
*  @return { number }
*/
const islandPerimeter = function (grid) {
    let nums = 0;
    for (let i = 0; i < grid.length; i++) {
        let arr = grid[i];
        arr.forEach((t, j) => {
            // 发现小方块
            if (t === 1) {
                // 如果方块元素的左边位置没有方块 nums加一
                if (!arr[j - 1] || arr[j - 1] === 0) ++nums;
                // 如果方块元素的右边位置没有方块 nums加一
                if (!arr[j + 1] || arr[j + 1] === 0) ++nums;
                // 如果grid数组的上面没有元素，或者方块元素上面元素为0 nums加一
                if (!grid[i - 1] || (grid[i - 1] && grid[i - 1][j] === 0)) ++nums;
                // 如果grid数组的下面没有元素，或者方块元素下面元素为0 nums加一
                if (!grid[i + 1] || (grid[i + 1] && grid[i + 1][j] === 0)) ++nums;
            }
        });
    }
    return nums;
};
const result = islandPerimeter([[0, 1, 0, 0],
[1, 1, 1, 0],
[0, 1, 0, 0],
[1, 1, 0, 0]]);
console.log(result);
