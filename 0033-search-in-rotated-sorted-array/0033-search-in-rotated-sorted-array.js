/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right =  nums.length - 1;

    while(left <= right){
        console.log(left, right)
        if(nums[left] === target){
            return left
        } else if (nums[right] === target){
            return right
        } else {
            right -= 1
            left += 1
        }
    }

    return -1
};