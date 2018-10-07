/*
  What is the difference between == and ===?

-> The == use for only value equal operation like 1==1,2==2 etc.
-> The === use for Both value and data-type are equal like number===number etc.

*/
// Use of ==
console.log(1==1);
console.log(2==1);
console.log(1.0==1);
console.log(1==null);

// Use of ===
console.log(Number===Number);
console.log(Number===null);
console.log(null===null);
console.log(undefined==String);
console.log("thisis"===1);
