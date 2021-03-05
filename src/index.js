module.exports = function check(str, bracketsConfig) {
    let openBrackets = [];
    let closeBrackets = [];
    let arr = [];
    let g = 0;
    while (g < str.length) {
        arr.push(str[g]);
        g++;
    }
    for (let i = 0; i < bracketsConfig.length; i++) {
        openBrackets.push(bracketsConfig[i][0]);
        closeBrackets.push(bracketsConfig[i][1]);
    }
    for (let j = 0; j < arr.length; j++) {
        for (let n = 0; n < openBrackets.length; n++) {
            if (arr[j] === openBrackets[n]) {
                if (arr[j + 1] === closeBrackets[n]) {
                    arr.splice(j, 2);
                    j--;
                    j--;
                }
            }
        }
    }
    return arr.length === 0 ? true : false;
};
