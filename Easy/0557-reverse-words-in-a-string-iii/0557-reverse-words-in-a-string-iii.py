class Solution:
    def reverseWords(self, s: str) -> str:
        splitList = s.split(" ");
        t =""
        for i in range(0,len(splitList)):
            tmp = list(splitList[i])
            t += ''.join(tmp[::-1])
            if i != (len(splitList)-1):
                t += " "
        return t
