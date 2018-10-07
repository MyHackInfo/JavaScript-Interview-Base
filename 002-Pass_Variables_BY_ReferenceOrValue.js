/*
->Pass by value in premitive data-type like int,string,boolean etc.
->Pass by value is not effect when we change value of variable inside function of outside.

->Pass by reference in non-premitive data-type like object.
->Pass by reference is effect when we change value of object inside function of outside.


*/

// Pass by value
"use strict"
var a=12;
function get(a){ a=2221};
get(a);
console.log(a);


// Pass by reference
"use strict"
var a={'try':'truethe'};
function get(a){ a.go='thisis'};
get(a);
//console.log(a);
