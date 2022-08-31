// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array
function
myFunction(a, n)
{

return a.filter((e,index)=>(index+1)%n==0)
}
t=myFunction([1,2,3,4,5,6,7,8,9,10],3)
Expected=[3,6,9]
console.log(t,Expected)