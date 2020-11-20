/* 队列queue中存储当前步伐所能对应的字符串
初始化count为1步
count++
每次循环把当前步数能走到的字符串now，now = queue.shift()全部拿出来走一走
判断wordList中是否存在字符是可以由now一步走到，
a. 如果得到了endWord可以直接return count；
b. 把满足置换一个字符但不是endWord的wordList[i]全部push进queue，并且把wordList[i]置为空，防止重走
c. 之后重复2-4
如果没有，说明走不到endWord了，queue为空时，跳出循环，return 0
最后，感觉如果加一点双向bfs的话效率应该也不至于特别拉垮，还有就是checkTwoStr应该也能优化= =
*/

/**
 * 
 * @param {*} beginWord 
 * @param {*} endWord 
 * @param {*} wordList 
 */
function ladderLength(beginWord, endWord, wordList) {
    // const beginWord = "hit",
    // endWord = "cog",
    // wordList = ["hot", "hog", "cog"];
    // 队列queue中存储当前步伐所能对应的字符串
    let queue = [beginWord];
    // 初始化为1步	
    let count = 1;
    while (queue.length) {
        // 步数，当前队列的个数
        let tmp = queue.length;
        console.log("tmp", tmp);
        // 步数加1
        count++;
        while (tmp--) {
            // 拿出一个字符串now "hit"
            console.log("queue", queue);
            let now = queue.shift();
            console.log("now", now);
            for (let i = 0; i < wordList.length; i++) {
                // 判断wordList中是否有该字符串转一个字符可以变成的字符串
                if (checkTwoStr(now, wordList[i])) {
                    // 如果直接能得到endWord则返回步数
                    if (wordList[i] === endWord) {
                        return count;
                    }
                    // 否则，queue中新增能到达的字符
                    queue.push(wordList[i]);
                    // 易知，所需要的最短的步数是不可能走回头路的，所以把走过的wordList[i]直接置空，防止重走
                    wordList[i] = "";
                }
            }
        }
    }
    return 0;
}
/**
 * 
 * @param {*} str1 
 * @param {*} str2 
 * 判断如果两个字符串只有一个字母是不同的返回true
 */
function checkTwoStr(str1, str2) {
    if (!str1 || !str2 || str1.length !== str2.length) {
        return false;
    }
    let result = false;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            if (!result) {
                result = true;
            }
            else {
                return false;
            }
        }
    }
    return result;
}
const beginWord = "hit",
    endWord = "cog",
    wordList = ["hot", "hog", "hut", "cog"];
const result = ladderLength(beginWord, endWord, wordList);
console.log(result);