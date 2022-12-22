class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        result = [None] * len(nums);
        j = 0
        k = len(nums)-1
        for i in range(len(nums)-1,-1,-1):
            now = nums[len(nums)-1-i]
            if  now == 0:
                result[k] = 0;
                k = k-1;
            else:
                result[j] = now;
                j=j+1;
        nums[:] = result
 