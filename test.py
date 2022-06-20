def move_zeroes(nums):

    # 1. Set a pointer to the last element in the array.
    last = len(nums) - 1

    # 2. Walk through each element of the array.
    i = 0
    while i < last:

        # 3. If the element is zero,
        if nums[i] == 0:
            # Remove the zero at i,
            nums.pop(i)
            # push it onto the end of the array
            nums.append(0)
            # then decrement the pointer.
            last -= 1

        i += 1

    return nums

nums = [0,1,0,3,12]
print(move_zeroes(nums))

def name(first, last):
    print(f'{first} {last}')

name("george", "washington")


def isPrime(number):
    if number < 2:
        return False
    for i in range (2, number):
        if number % i == 0:
            return False
    return True

number = 1
print(isPrime(number))
