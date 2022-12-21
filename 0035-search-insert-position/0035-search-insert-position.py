class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        l = 0;
        r = len(nums)-1;
        while l <= r:
            mid = (l+r)//2;
            if nums[mid] == target:
                return mid;
            elif target > nums[mid]:
                l = mid + 1;                
            elif target < nums[mid]:
                r = mid - 1;
       
        return l;