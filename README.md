# Unexpected NaN with Loose Equality and null/undefined

This example demonstrates a common JavaScript error caused by loose equality (==) when handling null and undefined values.

The function `foo` attempts to handle null inputs by returning 0. However, when passed `undefined`, the loose equality comparison `x == null` fails, and the code proceeds to `x + 1`, resulting in NaN because adding 1 to undefined is not a valid arithmetic operation. This is unexpected because many developers think `null` and `undefined` are interchangeable in such comparisons.

The solution demonstrates the importance of using strict equality (===) or explicitly checking for both null and undefined.
