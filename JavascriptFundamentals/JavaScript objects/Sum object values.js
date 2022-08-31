
// Write a function that takes an object (a) as argument
// Return the sum of all object values
function myFunction(a)
{
let acc=0
Object.values(a).forEach(e=>acc+=e)
return acc
}