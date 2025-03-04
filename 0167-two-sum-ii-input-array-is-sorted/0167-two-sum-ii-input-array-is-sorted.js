/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while(left < right){
        const add = numbers[left] + numbers[right]
        if( add === target)
        {
            return [left+1,right+1]
        } else if( add < target){
            left += 1;
        } else {
            right -= 1;
        }
        
        
    }
};