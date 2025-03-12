/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let left = 0;
    let right = s.length - 1;
    let result = '';
    while(left <= right){
        const str = s.slice(left,right+1)
        if(checkChar(str,t)){
            result = str;
        } else {
            return result
        }
        left++;
    }
    return result
};

function checkChar(s,t) {
    const hash = s.split('').reduce((a,c) => {
        if(c in a){
            a[c]++;
        } else {
            a[c] = 1;
        }

        return a
    },{})

    for(let i of t){
        if(hash.hasOwnProperty(i) && hash[i] > 0){
            hash[i]--
        } else {
            return false
        }
    }
    
    return true
}