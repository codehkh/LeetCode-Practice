class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k = len(nums)
        l = nums.copy()
        for i in l:
            if i == val:
                nums.remove(i)
                k -= 1
        return k