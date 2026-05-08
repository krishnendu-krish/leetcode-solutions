class Solution:
    def myAtoi(self, s: str) -> int:

        s = s.strip()

        if not s:
            return 0

        sign = 1
        index = 0

        if s[0] == '-':
            sign = -1
            index += 1

        elif s[0] == '+':
            index += 1

        number = 0

        while index < len(s) and s[index].isdigit():
            number = number * 10 + int(s[index])
            index += 1

        number = sign * number

        INT_MIN = -2**31
        INT_MAX = 2**31 - 1

        if number < INT_MIN:
            return INT_MIN

        if number > INT_MAX:
            return INT_MAX

        return number