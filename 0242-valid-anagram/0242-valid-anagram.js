/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = new Map()

    if(s.length != t.length){
        return false
    }
    for(let i = 0; i < s.length; i++){
        map.set(s[i],i)
    }

    for(let i = 0; i<t.length; i++){
        if(!map.has(t[i])){
            return false
        }

    }

    return true
};