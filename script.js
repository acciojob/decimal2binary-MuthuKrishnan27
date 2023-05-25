function threeSum(arr, target) {
// write your code here
  const n = arr.length;

  // Iterate over all possible combinations of three numbers
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          return 1; // Return 1 (true) if the sum matches the target
        }
      }
    }
  }

  return 0; // Return 0 (false) if no such combination is found
}

module.exports = threeSum;
