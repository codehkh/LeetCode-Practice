/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = ''
    if(s.length === 1){
        return s
    }
    for(let i = 0; i < s.length; i++){
        let left = i - 1;
        let right = i + 1;
        let pal = s[i];
        while(s[i] === s[right] && right < s.length){
            pal += s[right]
            right += 1;
        }
        console.log(pal)
        while((s[left] === s[right]) && left >= 0 && right < s.length){
            pal = s[left] + pal +s[right]
            left -= 1;
            right += 1;
        }
        if(pal.length > result.length){
            result = pal
        }
    }

    return result
};