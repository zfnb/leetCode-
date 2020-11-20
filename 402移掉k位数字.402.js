let removeKdigits = function (num, k) {
    let stack = [];
    for (let i = 0, len = num.length; i < len; i++) {
        let temp = num[i];
        // 当遍历的元素比此时栈顶元素小，删除栈顶元素
        while (k > 0 && stack.length > 0 && temp < stack[stack.length - 1]) {
            stack.pop();
            k--;
        }
        stack.push(temp);
    }
    // 如果未删除，从尾部继续
    while (k > 0) {
        stack.pop();
        k--;
    }
    // 去除无效的0
    while (stack.length > 0 && stack[0] === "0") {
        stack.shift();
    }

    return stack.length ? stack.join("") : "0";
};
let num = "1432219", k = 3;
console.log(removeKdigits(num, k));