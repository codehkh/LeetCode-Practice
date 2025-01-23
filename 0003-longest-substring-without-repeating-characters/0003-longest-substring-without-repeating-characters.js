/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    s.replace(' ', "");
    let tmp = [];
    let l = 0;
    let max_l = 0;
    for(let r = 0; r<s.length+1; r++){
        tmp = s.slice(l,r)
        if(decide(tmp)){
            max_l = r - l
        }else{
            l++;
        }
    }

    return max_l
};

function decide(arr) {
    let tmp = [];
    for(let i = 0; i < arr.length; i++){
        if(tmp.includes(arr[i])){
            return false
        } else {
            tmp.push(arr[i])
        }
    }

    return true;
}