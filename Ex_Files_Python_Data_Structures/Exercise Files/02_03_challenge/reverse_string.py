"""
Python Data Structures - A Game-Based Approach
Stack challenge
Robin Andrews - https://compucademy.net/
"""

import stack

string = "gninraeL nIdekniL htiw tol a nraeL"
reversed_string = ""
s = stack.Stack()

# Your solution here.

for char in string:
    s.push(char)

while not s.is_empty():
    reversed_string += s.pop()

print("  ═══════════════════════════════════════════════════  ")
print("Let's use a Stack Data Structure to reverse the String: ")
print("       ==>     '" + string + "': ")
print("                                                       ")
print("The answer is: " + "'" + reversed_string+"'.")
print("                                                       ")
print("              ⇢ ⇢ ⇢ Hooray for Python! ⇠ ⇠ ⇠")
print("  ═══════════════════════════════════════════════════  ")
