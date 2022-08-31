// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array
function
myFunction
(
a, n
)
{
let newArray=[]
for (let i=n-1;i<a.length;i+=n)
{newArray.push(a[i])}
return newArray
}

