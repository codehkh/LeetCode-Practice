# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        left = 1;
        right = n;
        while left <= right:
            mid = (left+right)//2;
            first = isBadVersion(mid)
            if  first == True:
                second = isBadVersion(mid-1)
                if mid == n:
                    return mid
                if second == False:
                    return mid
                elif second == True:
                    right = mid
            elif first == False:
                    left = mid+1
            
            