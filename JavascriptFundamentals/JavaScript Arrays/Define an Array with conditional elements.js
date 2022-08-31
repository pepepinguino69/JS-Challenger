// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array
function myFunction(arr, num){
let newArray=[]
num<6?newArray.push(0):newArray.push(num)

return newArray.concat(arr)
}









