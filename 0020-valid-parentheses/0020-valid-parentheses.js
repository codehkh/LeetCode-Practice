/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    const map = {')':'(','}':'{',']':'['}
    for(let i of s){
        if( i in map){
            if(stack.length && stack[stack.length-1] === map[i])
            {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(i)
        }
    }

    return stack.length === 0
};