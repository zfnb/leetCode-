const letterCombinations = function (digits) {
    const obj = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };
    const res = [];

    function dfs(index, result) {
        if (index === digits.length) {
            if (result) {
                res.push(result);
                return;
            }
        }
        for (let i = 0; i < obj[digits[index]].length; i++) {
            dfs(index + 1, result + obj[digits[index]][i]);
        }
    }
    dfs(0, "");
    return res;
};
const result = letterCombinations("23");
console.log(result);