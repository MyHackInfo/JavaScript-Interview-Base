/*
  # What is use strict mode ?
-> Its is features of ES5
-> Its use for finding error and debug
-> When we use Reserve Keyword of JavaScript future version for variable name
-> In strict mode deleting of variable or argument of function its give error

*/
"use strict";
console.log("Reserve Keyword of JavaScript future version for variable name");
var let=45;
console.log(let);           // Its give error


console.log("strict mode deleting of variable or argument of function its give error");
var just=45;
function go(a){ delete a};   // Its give error
delete just;                 // Its give error
