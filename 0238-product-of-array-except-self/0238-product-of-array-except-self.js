/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = [];
    for(let i = 0; i < nums.length; i++){
        let left = 1;
        let right = 1;
        for(let le = 0; le < i; le++){
            left *= nums[le]; 
        }
        for(let ri = nums.length - 1; ri > i; ri--){
            right *= nums[ri]; 
        }
        result.push(left*right)

    }
    return result
};