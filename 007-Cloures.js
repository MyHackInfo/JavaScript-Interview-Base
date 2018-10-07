// Closues are function inside function in return way to take outer scope variable access


function say(name){
  var you='you are to good ' + name;
  return function(){
    console.log(you);
  }
};
say("narsi")();
