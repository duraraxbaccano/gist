/*
  the definition of edit distance is 
  the number of minimum steps which make a string same as another string.
  
  Each step can choose 1 of 3 actions to do.
  The 3 actions are
  1. deleting one character in any position of a string
  2. inserting one character in any position of a string
  3. replacing one character with any character of a string

  For example: 
    The edit distance between the string "form" and another string "from" is 2.
    (In case sensitive) Why?

    Step 1:
    Deleteing "o" from "form" to "frm".

    Step 2:
    Inserting "o" into "frm" (the position between "r" and "m").
    
    Now we transform "form" to "from" in 2 actions.

    The matrix of two strings looks like these: 

         F R O M 
       _ _ _ _ _
      |0 1 2 3 4
    F |1 0 1 2 3
    O |2 1 1 1 2
    R |3 2 1 2 2
    M |4 3 2 2 2

*/
"use strict";
function editDistance(str1, str2) {
  // input validation
  if (arguments.length === 1) {
    return (typeof str1 === "string")? str1.length : 0;
  } else if (arguments.length === 0) {
    return 0;
  } else if ((typeof str1 !== "string") || (typeof str2 !== "string")) {
    // convert all types into string
    str1 = "" + str1;
    str2 = "" + str2;
  } else {
  }

  // initial matrix
  var distMat = new Array(str1.length + 1);
  for (var col = 0; col < distMat.length; col++) {
    distMat[col] = new Array(str2.length + 1);
    for (var row = 0; row < distMat[col].length; row++) {
      distMat[col][row] = 0;
    }
  }
  // initial the edit distance between str1 with empty string 
  for (var col = 0; col < distMat.length; col++) {
    distMat[col][0] = col;
  }
  // initial the edit distance between empty string with str2
  for (var row = 0; row < distMat[0].length; row++) {
    distMat[0][row] = row;
  }
  // calculate the minimum edit distance according to each possible sub string before
  for (var col = 1; col < distMat.length; col++) {
    for (var row = 1; row < distMat[col].length; row++) {
      // if the edit distance comes from the top left position
      var topLeftPos = (str1[col - 1] === str2[row - 1]) ? distMat[col - 1][row - 1] : distMat[col - 1][row - 1] + 1;
      // from leftPos = distMat[col - 1][row] + 1
      // from topPos = distMat[col][row - 1] + 1
      distMat[col][row] = min(topLeftPos, distMat[col - 1][row] + 1, distMat[col][row - 1] + 1);
    }
  }

  return distMat[str1.length][str2.length];

  function min() {
    // argument validation
    if (arguments.length < 1) {
      return NaN;
    } else {
    }
    // find the minimum value of all input numbers
    var minimum = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      if (arguments[i] < minimum) {
        minimum = arguments[i];
      }
    }
    return minimum;
  }

  function dump() {
    for (var col = 0; col < distMat.length; col++) {
      var line = "| ";
      for (var row = 0; row < distMat[col].length; row++) {
        line += distMat[col][row];
      }
      line += " |";
      console.log(line);
    }
  }
}


