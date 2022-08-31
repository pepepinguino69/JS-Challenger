// Write a function that takes an array of strings as argument
// Return the longest string
function myFunction(arr)
{

return arr.reduce((max,curr)=>max.length>=curr.length?max:curr)}


