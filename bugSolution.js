function myFunc(a, b) {
  if (b === 0) {
    throw new Error('Division by zero'); // Throw an error for zero division
  } else if (a === 0) {
      return 0; // Handle zero numerator appropriately
  }
  return a / b;
}

console.log(myFunc(10, 2)); // Output: 5

try {
  console.log(myFunc(10, 0)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Division by zero
}

console.log(myFunc(0,2)); //Output: 0