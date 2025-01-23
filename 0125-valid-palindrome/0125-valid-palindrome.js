/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length === 1)
        return true
    s = s.split(' ').join('').toLowerCase().replace(/[^a-z0-9]/g, "");

    if(s.length === 1||s === '')
        return true
    let l = 0;
    let r = s.length-1;

    while(l <= r){
        if(s[l] !== s[r]){
            return false
        }
        l++;
        r--;
    }

    return true
};