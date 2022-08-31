// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
function myFunction(a, b){
let acc=0
a.forEach(e=>{if(e>b){acc+=e}})
return acc
}
t=myFunction([1, 2, 3, 4, 5, 6, 7], 2)
tExpected
=25
console.log(t,tExpected)