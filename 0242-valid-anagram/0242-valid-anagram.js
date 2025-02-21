/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length){
        return false
    }

    const arr_s = s.split('').sort()
    const arr_t = t.split('').sort()

    for(let i = 0; i < arr_s.length; i++){
        if(arr_s[i] !== arr_t[i]){
            return false
        }
    }


    return true
};