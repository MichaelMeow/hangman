
var n = 79;
var numArray = [];
//create a list of numbers 2 through n
  for(i=2; i <= n; i++){
    numArray.push(i);
  }
console.log(numArray + "first");

//remove all multiples of prime
numArray.forEach(function(num){
if (num == ""){
  console.log("nothing");
}else {
  for(x=2;(num*x)<=n;x++){
    console.log(num);
    numArray[(num * x) - 2] = "";
    console.log(numArray);
  }
}
});

//format and display results

var result = numArray.join(" ");
var result2 = result.replace(/[\s]{2,}/g," ");
console.log(result2);
