/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    nums.sort((a,b) => a-b)
    
    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] === nums[i-1]) continue;
            let left = i+1;
            let right = nums.length - 1;

            while(left < right){
                if(nums[i] + nums[left] + nums[right] === 0){
                    result.push([nums[i], nums[left], nums[right]])
                    // 두 번째 수 중복 제거
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    // 세 번째 수 중복 제거
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    right-=1;
                } else if(nums[i] + nums[left] + nums[right] > 0){
                    right-=1;
                } else {
                    left+=1;
                }
            }
        

    }

    return result
};