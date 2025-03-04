/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = {};
    for(i of strs){
        const tmp = i.split('').sort().join('');
        if(hash.hasOwnProperty(tmp)){
            hash[tmp] = [...hash[tmp], i]
        } else {
            Object.assign(hash,{[tmp]:[i]})
        }
    }

    return Object.values(hash)
};