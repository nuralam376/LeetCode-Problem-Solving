class Solution:
    def two_sum(self, nums, target):
        for num in range(0, len(nums)):
            for num2 in range(num + 1, len(nums)):
                if nums[num] + nums[num2] == target:
                    return [num, num2]


solution = Solution()
result = solution.two_sum([1, 2, 3, 4], 7)
print(result)
