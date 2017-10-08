/**
 * This recursive algorithm helps to count greatest common divisor (GCD)
 * @param a {number}
 * @param b {number}
 * @return {number}
 */
function euclidianAlgorithmRecursive(a, b) {

  if ( a !== 0 && b !== 0 ) {

    if ( a > b ) {
      return euclidianAlgorithmRecursive(a % b, b)
    } else {
      return euclidianAlgorithmRecursive(a, b % a)
    }

  }

  return a+b;
}
/**
 * This cycle algorithm helps to count greatest common divisor (GCD)
 * @param a {number}
 * @param b {number}
 * @return {number}
 */
function euclidianAlgorithmCycle(a, b) {

  while( a !== 0 && b !== 0 ){
    if( a > b ) {

      a = a % b;

    }else{

      b = b % a;

    }
  }

  return a+b;
}
/*--------------------------------------------------------------------------------------------------------------------*/

// @param num {number}
// @return {number}

function fibbonacci(num) {
  return undefined;
}
/*--------------------------------------------------------------------------------------------------------------------*/

// @param disksCount {string}
// @param firstTower {string}
// @param secondTower {string}
// @param thirdTower {number}
// @return full description of moving disks from first tower to third tower


function hanoiTower(disksCount, firstTower, secondTower, thirdTower) {
  return undefined;
}
/*--------------------------------------------------------------------------------------------------------------------*/

// @param num {number}
// @param p {number} = 2, you don't need to pass this argument
// @return {bool}

function isPrime(num, p = 2) {
  return undefined;
}
/*--------------------------------------------------------------------------------------------------------------------*/

// @param num {number}
// @param exp {number}
// @return {number}

function power(num, exp) {
  return undefined;
}