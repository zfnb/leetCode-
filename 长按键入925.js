/*
你的朋友正在使用键盘输入他的名字name。
偶尔，在键入字符c时，按键可能会被长按，而字符可能被输入 1 次或多次。
你将会检查键盘输入的字符typed。
如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回True。
 */
const isLongPressedName = (name, typed) => {
    // name的指针
    let i = 0;
    // 循环typed
    for (let j = 0; j < typed.length; j++) {
        // 如果i在name长度范围内，name与typed的对应项相同
        if (i < name.length && name[i] === typed[j]) {
            // i 和 j 都步进1
            i++;
        } else if (i - 1 >= 0 && typed[j] === name[i - 1]) {
            // i - 1 >= 0代表name[i - 1]存在
            // 当前typed[j]是长按出来的，它右边可能还有长按出来的，只是j++
        } else { // name[i - 1]不存在，或 typed[j] != name[i - 1]，键入错误，直接返回false
            return false;
        }
    }
    if (i > name.length - 1) { // 遍历结束，如果i越界了，说明i的字符也考察完了，返回true
        return true;
    }
    return false; // i 没越界，说明还有别的字符未匹配，返回false
};
const result = isLongPressedName("zfx", "zffx");
console.log(result);