// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
function myFunction(a, b)
{
newArray= a.concat(b)
newArray.sort((a,b)=>a-b)
newSet= new Set(newArray)


return Array.from(newSet)
}

