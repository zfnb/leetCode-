function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    const mergeArr: number[] = [];
    let n1 = 0, n2 = 0;
    while (n1 < nums1.length && n2 < nums2.length) {
        if (nums1[n1] > nums2[n2]) {
            mergeArr.push(nums2[n2]);
            n2++;
        } else {
            mergeArr.push(nums1[n1]);
            n1++;
        }
    }
    if (n1 < nums1.length) {
        // nums1的指针还没有到最后
        for (let i = n1; i < nums1.length; i++) {
            mergeArr.push(nums1[i]);
        }
    } else {
        for (let i = n2; i < nums2.length; i++) {
            mergeArr.push(nums2[i]);
        }
    }
    const mergeLength = mergeArr.length; // 3  0,1,2
    if (mergeLength % 2 !== 0) {
        // mergeArr长度是奇数,索引数是偶数
        return mergeArr[Math.floor(mergeLength / 2)];
    } else {
        // mergeArr长度是偶数
        const midLast = mergeLength / 2;
        const midPre = midLast - 1;
        console.log(midPre, midLast);
        return (mergeArr[midPre] + mergeArr[midLast]) / 2;
    }
};
const findResult = findMedianSortedArrays([1, 3], [2, 5]);
console.log(findResult);
