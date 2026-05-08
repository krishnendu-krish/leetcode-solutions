class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        
        number = int("".join(map(str, digits)))
        number += 1

        return list(map(int, str(number)))

obj = Solution()
print(obj.plusOne(digits))            