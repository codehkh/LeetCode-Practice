class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        nlist = []
        for i in nums:
            nlist.append(i*i)
        nlist.sort()
        return nlist;