class Solution:
    def xorOperation(self, n: int, start: int) -> int:
        nums = 0
        for _ in range(n):
            nums ^= start + 2 * _
        return(nums)    