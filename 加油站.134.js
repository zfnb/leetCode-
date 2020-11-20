/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
let canCompleteCircuit = function (gas, cost) {
    if (gas.length !== cost.length) return -1;
    // 数组长度
    const len = gas.length;
    // 剩余油量
    let remain = 0;
    // 开始位置
    let k = 0;
    // 用来找到起点
    let run = 0;
    for (let i = 0; i < len; i++) {
        // remain判断是否能到下一个加油站，当前剩余油量加上当前加油站加的油量减去到下一个加油站需要的油量
        remain += gas[i] - cost[i];
        run += gas[i] - cost[i];
        // 如果run小于0说明到不了下一个加油站，将下一个加油站作为起点再次尝试
        if (run < 0) {
            // 下一个加油站作为起点
            k = i + 1;
            run = 0;
        }
    }
    return remain < 0 ? -1 : k;
};
const gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2];
// const gas = [2, 3, 4], cost = [3, 4, 3];

console.log(canCompleteCircuit(gas, cost));