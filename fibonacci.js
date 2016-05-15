/*
  This JS file collects the different algorithms to generate 
  the specific fibonacci number.
*/
"use strict";

function iterativeFib(index) {
  var fibArr = [0, 1, 1];
  if (index < 3) {
    if (index < 1) {
      return 0;
    } else {
      // do nothing
    }
  } else {
    for (var i = 3; i < index; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
  }
  return fibArr[index];
}

function recursiveFib(index) {
  if (index < 1) {
    return 0;
  } else if (index < 3) {
    return 1;
  } else {
    return recursiveFib(index - 1) + recursiveFib(index - 2); 
  }
}

var lookupFib = function (index) {
  this.fibArr = [0, 1, 1];
  if (index < this.fibArr.length) {
    if (index < 1) {
      return 0;
    } else {
      // do nothing
    }
  } else {
    for (var i = this.fibArr.length; i < index; i++) {
      this.fibArr[i] = this.fibArr[i - 1] + this.fibArr[i - 2];
    }
  }
  return this.fibArr[index];
};

// test 
console.log("Iterator: " + iterativeFib(10));
console.log("Recursive: " + recursiveFib(10));
console.log("Look up: " + lookupFib(10));
