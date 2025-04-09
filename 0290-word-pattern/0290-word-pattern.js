/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const arr = s.split(' ');
    const hash = new Map();
    const hash2 = new Map();
    if(pattern.length !== arr.length) return false;
    
    for(let i = 0; i < pattern.length; i++){
        if(hash.has(pattern[i])){
            if(hash.get(pattern[i]) !== arr[i]) return false;
        } else {
            hash.set(pattern[i],arr[i])
        }

        if(hash2.has(arr[i])){
            if(hash2.get(arr[i]) !== pattern[i]) return false;
        } else {
            hash2.set(arr[i],pattern[i])
        }
    }
    
    return true
};