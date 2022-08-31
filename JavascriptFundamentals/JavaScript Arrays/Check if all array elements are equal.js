// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function myFunction(arr){
    
    newSet = new Set(arr)
    return newSet.size==1

}
