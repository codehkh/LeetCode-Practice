/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = [nums[0]]
    for(var i = 1; i< nums.length; i++){
        if(nums[i] !== nums[i-1])
        { k.push(nums[i])}
           
    }

    nums.splice(0,nums.length,...k)
};