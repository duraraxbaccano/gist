/*
  The following conversion is not available in Safari & Node.js:

  bin1 = 0b111,
  bin2 = 0b100,
  octal1 = 0o256,
  octal2 = 0o111,
*/
// all number types
var number1 = 12, 
  number2 = 23, 
  float1 = 11.1234, 
  float2 = 123.456,
  hex1 = 0x256,
  hex2 = 0x111,
  sci1 = 123e5,
  sci2 = 123e-5,
  infinite = Infinity,
  negInfinite = -Infinity,
  notNum = NaN;
// String
var string1 = "Johnson",
  string2 = "Jackson";
// Array          
var arr1 = ["Saab", "Volvo", "BMW"], 
  arr2 = ["Audi", "Benz", "BMW"];
// Object      
var obj1 = {firstName:"John", lastName:"Doe"},
  obj2 = {firstName:"John", lastName:"Does"};
// function
var func1 = function () { var k = 1; },
  func2 = function () { var a = 7; };
/*
 Boolean
 Null
 Undefined  
*/
var boo1 = true, boo2 = false;
var aNull = null;
var aUndefined = undefined;

// test file for node js
// import edit distance function
if (typeof require === "function") {
  var editDistance = require('./edit-distance.js');
  var test = new editDistance();
  console.log("Number (" + number1 + ", " + number2 + ") : " + test.editDistance(number1, number2));
  console.log("Float (" + float1 + ", " + float2 + ") : " + test.editDistance(float1, float2));
/*
  console.log("Binary:" + test.editDistance(bin1, bin2));
  console.log("Octal:" + test.editDistance(octal1, octal2));
*/
  console.log("Hex (" + hex1 + ", " + hex2 + ") : " + test.editDistance(hex1, hex2));
  console.log("Science notation (" + sci1 + ", " + sci2 + ") : " + test.editDistance(sci1, sci2));
  console.log("Infinite (" + infinite + ", " + negInfinite + ") : " + test.editDistance(infinite, negInfinite));
  console.log("NaN and Null (" + notNum + ", " + aNull + ") : " + test.editDistance(notNum, aNull));
  console.log("String (" + string1 + ", " + string2 + ") : " + test.editDistance(string1, string2));
  console.log("Array (" + arr1 + ", " + arr2 + ") : " + test.editDistance(arr1, arr2));
  console.log("Object (" + obj1 + ", " + obj2 + ") : " + test.editDistance(obj1, obj2));
  console.log("Function (" + func1 + ", " + func2 + ") : " + test.editDistance(func1, func2));
  console.log("Boolean (" + boo1 + ", " + boo2 + ") : " + test.editDistance(boo1, boo2));
  console.log("Undefined (" + aUndefined + ", aUndefined) : " + test.editDistance(aUndefined, "aUndefined"));
  console.log("2 more arguments (" + string1 + ", " + string2 + ", " + boo1 + ", " + boo2 + ") : " + test.editDistance(string1, string2, boo1, boo2));
  console.log("1 argument (" + string1 + ") : " + test.editDistance(func1));
  console.log("No argument : " + test.editDistance());
}
