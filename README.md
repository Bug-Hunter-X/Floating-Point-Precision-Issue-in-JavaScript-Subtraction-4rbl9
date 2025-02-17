# Floating Point Precision Issue in JavaScript Subtraction

This repository demonstrates a common, yet subtle, bug in JavaScript related to floating point precision.  When performing subtraction (or addition) of floating point numbers, the result may not always be exact due to the limitations of how computers represent these numbers in binary format.

The `bug.js` file shows a simple subtraction function that exhibits this problem. The `bugSolution.js` file presents a possible solution by using a suitable library like `bignumber.js`.