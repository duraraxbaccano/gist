/*
  This JS file collects the different algorithms to generate 
  the specific fibonacci number.
*/
"use strict";
/*
  Method 1: iterative calculating Fibonacci numbers
*/
function iterativeFib(index) {
  var fibArr = [0, 1, 1];
  if (index < 3) {
    if (index < 1) {
      return 0;
    } else {
      // do nothing
    }
  } else {
    for (var i = 3; i <= index; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
  }
  return fibArr[index];
}
/*
  Method 2: recursive calculating Fibonacci numbers
*/
function recursiveFib(index) {
  if (index < 1) {
    return 0;
  } else if (index < 3) {
    return 1;
  } else {
    return recursiveFib(index - 1) + recursiveFib(index - 2); 
  }
}
/*
  Method 3: The improvement of Method 1
  Save the previous Fibonacci numbers,
  and return the number been caculated.
*/
var lookupFib = function (index) {
  this.fibArr = [0, 1, 1];
  if (index < this.fibArr.length) {
    if (index < 1) {
      return 0;
    } else {
      // do nothing
    }
  } else {
    for (var i = this.fibArr.length; i <= index; i++) {
      this.fibArr[i] = this.fibArr[i - 1] + this.fibArr[i - 2];
    }
  }
  return this.fibArr[index];
};

/*
  Method 4: Caculating Fibonacci in matrix

  | first fibonacci number, second fibonacci number |
             x
  | transition matrix |
             =
  | second fibonacci number, third fibonacci number |          


  | 0, 1 | x | 0, 1 | = | 1, 1 |
             | 1, 1 |
*/
function matrixFib(index) {
  var fibs = [0, 1];
  var mat = [[0, 1], [1, 1]];
  if (index < 1) {
    return 0;
  } else if (index < 3) {
    return 1;
  } else {
    for (var i = 2, f1 = 0, f2 = 1; i <= index; i++, f1 = fibs[0], f2 = fibs[1]) {
      fibs[0] = f1 * mat[0][0] + f2 * mat[1][0];
      fibs[1] = f1 * mat[0][1] + f2 * mat[1][1];
    }
    return fibs[1];
  }
}
/*
  Method 5: non-iterative and closed-form Fibonacci algorithm
  The following method 5 is sourced from 
  Paul's blog [1].
  [1] http://paulhankin.github.io/Fibonacci/ 
*/
function integerFib(index) {
  return Math.floor( (4 << index * (3 + index)) / ((4 << 2 * index) - (2 << index) - 1) ) & ((2 << index) - 1);
}
/*
  Method 6: Fast Fibonacci algorithm (Approach)
*/
function fastFib(index) {

}
// test 
console.log("Iterator: " + iterativeFib(10));
console.log("Recursive: " + recursiveFib(10));
console.log("Look up: " + lookupFib(10));
console.log("Matrix Fib: " + matrixFib(10));
console.log("Integer Formula Fib: " + integerFib(10));
