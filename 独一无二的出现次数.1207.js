// 独解
const arr = [1, 2, 2, 1, 2, 1, 3];
const uniqueOccurrences = function (arr) {
    const keyMap = {};
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (!keyMap[value]) {
            keyMap[value] = 1;
        } else {
            keyMap[value] = keyMap[value] + 1;
        }
    }
    const set = new Set();
    let i = 0;
    for (const key in keyMap) {
        i++;
        set.add(keyMap[key]);
    }
    return i === set.size;
};
uniqueOccurrences(arr);