/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
     let sum = 0;
     let l = 0;
    let r = 0;
    let min_l = Infinity;
    while(r < nums.length){
       sum += nums[r]
        while(sum >= target){
            if(r - l + 1 < min_l){
                min_l = r - l + 1
            }
            sum -= nums[l]
            l++;
        }
        r++;
    }
    
    return min_l !== Infinity? min_l:0;
};