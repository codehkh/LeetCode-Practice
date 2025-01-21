/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let tmp = nums.reduce((a,c) => { if(c in a) {a[c]++} else {a[c] = 1} return a }, {})
  let keys = Object.keys(tmp)
  for(i of keys){
    if(tmp[i] > nums.length/2){
        return +i
    }      
  }

};