nums = [1,1,2, 2, 3, 4, 5, 0, 0, 0, 0, 1, 1]
nums2 = [1, 2, 3, 4, 5, 0, 0, 0, 0, 1, 1]

count = 0
i = 0

while i < len(nums) - 1:
    for j in range(i):
        if nums[i] == nums[j]:
            count += 1
            del nums[j]
        else:
            i += 1

print(len(nums))
print(nums)