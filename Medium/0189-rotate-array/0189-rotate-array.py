class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        length = len(nums);
        if k < length:
            spot = length - k
            sub = nums[spot:]
            nums[:] = sub + nums[:spot]
        elif k > length:
            spot = length - k%length
            sub = nums[spot:]
            nums[:] = sub + nums[:spot]


