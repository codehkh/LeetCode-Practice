/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 2
    for(var j = 2; j < nums.length; j++){
        if(nums[j] !== nums[i-2]){
            nums[i] = nums[j]
            i++
        }
    }

    return i
    
};