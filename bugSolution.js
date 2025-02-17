const BigNumber = require('bignumber.js');

function myFunction(a, b) {
  const bigA = new BigNumber(a);
  const bigB = new BigNumber(b);
  return bigA.minus(bigB).toFixed();
}

console.log(myFunction(5, 2)); // Output: 3
console.log(myFunction(2, 5)); // Output: -3
console.log(myFunction(0.1, 0.2)); // Output: -0.1
//Notice how this example works correctly with floating-point numbers, unlike a simple subtraction.