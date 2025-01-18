/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    nums.splice(0,nums.length,...nums.filter((i) => i !== val))
};