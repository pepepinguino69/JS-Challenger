// Write a function that takes an array of strings as argument
// Return the longest string
function myFunction(arr)
{

return arr.reduce((max,curr)=>{if(curr.length>max.length){max=curr}})
}
console.log(myFunction['qw','asd','kkkk'])