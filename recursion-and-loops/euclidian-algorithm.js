* @param {string} value1
 * @param {string} value2
 * @return {string}

function euclidianAlgorithm(a, b) {
  return b == 0 ? a : euclidianAlgorithm(a, a % b)
}
