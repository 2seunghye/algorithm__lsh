# 스택

import sys

stack_list = []

def push(data):
        stack_list.append(data)

def pop():
    if not stack_list:
        return -1
    else:
        return stack_list.pop()

def size():
    return len(stack_list)

def empty():
    if not stack_list:
        return 1
    else:
        return 0

def top():
    if not stack_list:
        return -1
    else:
        return stack_list[-1]

n = int(sys.stdin.readline().rstrip())

for _ in range(n):
    input_split = sys.stdin.readline().rstrip().split()
    order = input_split[0]

    if order == "push":
        push(input_split[1])
    elif order == "pop":
        print(pop())
    elif order == "size":
        print(size())
    elif order == "empty":
        print(empty())
    elif order == "top":
        print(top())
