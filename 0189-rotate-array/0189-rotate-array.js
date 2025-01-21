/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(nums.length <= k){
        k = k % nums.length
    }
    let tmp = nums.splice(-k)

    nums.splice(0,0,...tmp)
};