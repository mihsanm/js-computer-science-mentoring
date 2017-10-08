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

/**
 *
 * @param num {number}
 * @returns {number}
 */
function fibonacci(num) {

  if ( num > 2 ) {
    return fibonacci(num-1) + fibonacci(num-2);
  }

  return 1;

}

/**
 *
 * @param num {number}
 * @returns {number}
 */
function fibonacciCycle(num) {

  if(num > 2){
      let fibArr = [1, 1];

      for( let i = 2; i < num; i+=1 ){

          fibArr.push( fibArr[i-1] + fibArr[i-2] );

      }

      return fibArr[fibArr.length-1];
  }

  return null;
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