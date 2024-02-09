/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
  const numbers = new Map();
  const solution = new Map();

  for (let i = 0; i < A.length; i++) {
    numbers.set(A[i], true);
  }

  for (let i = 0; i < A.length; i++) {
    let diff = N - A[i];
    if (diff != A[i]) {
      if (numbers.get(diff)) {
        solution.set(Math.min(A[i], diff), Math.max(A[i], diff));
      }
    }
  }
  return [...solution];
}

module.exports = sumPairs;
