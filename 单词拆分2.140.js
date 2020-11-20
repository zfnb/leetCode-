let wordBreak = function (s, wordDict) {
    // 利用上题 进行判断
    let dp = [];
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.indexOf(s.slice(j, i)) !== -1) {
                dp[i] = true;
                break;
            }
        }
    }
    if (!dp[s.length])
        return [];

    // 本题回溯
    let res = [];
    trackback(s, "");
    return res;
    function trackback(s, tmp) {
        if (s.length === 0) {
            res.push(tmp.trim());
            return;
        }
        for (let i = 0; i < wordDict.length; i++) {
            if (s.startsWith(wordDict[i]))
                trackback(s.slice(wordDict[i].length), tmp + " " + wordDict[i]);
        }
    }
};
const s = "catsanddog";
const wordDict = ["cat", "cats", "and", "sand", "dog"];
const result = wordBreak(s, wordDict);
console.log(result);