/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let tmp = magazine.split('')
    for(let i = 0; i<ransomNote.length; i++){
        let idx = tmp.findIndex((e) => e === ransomNote[i])
       
        if(idx === -1){
            return false
        } else {
            tmp.splice(idx,1)
        }
    }

    return true
};