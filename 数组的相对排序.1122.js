const relativeSortArray = (arr1, arr2) => {
    let newArr = [];
    let set = new Set(arr2);
    // 数组1中存在，数组2中不存在的元素数组
    let otherNum = arr1.filter(n => !set.has(n)).sort((a, b) => a - b);
    for (let i in arr2) {
        // 如果数组1中存在数组2的这个元素
        if (arr1.indexOf(arr2[i]) !== -1) {
            // 循环数组1
            for (let j = 0; j < arr1.length; j++) {
                // 数组1如果等于当前数组2的元素，将数组1中的这个元素添加到新数组中
                if (arr1[j] === arr2[i]) {
                    newArr.push(arr1[j]);
                }
            }
        }
    }
    newArr.push(...otherNum);
    return newArr;
};
let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6];
console.log(relativeSortArray(arr1, arr2));