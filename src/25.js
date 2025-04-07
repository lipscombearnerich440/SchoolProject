function sum(numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(sum([1, 2, 3])); // Output: 6
