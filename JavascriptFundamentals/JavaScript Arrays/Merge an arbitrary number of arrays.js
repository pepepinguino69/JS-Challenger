// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

function myFunction(...arrays){
newArray=[]
arrays.forEach(e=>newArray.push(...e))
return newArray

}



