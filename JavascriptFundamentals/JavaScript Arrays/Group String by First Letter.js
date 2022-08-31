// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

function myFunction(arr){
newObject={}
arr.sort
let i=1
newObject[arr[0].substring(0,1).toLowerCase()]=[]
newObject[arr[0].substring(0,1).toLowerCase()].push(arr[0])
while (i<arr.length){
    firstLetter=arr[i].substring(0,1).toLowerCase()
    if((firstLetter)!=arr[i-1].substring(0,1).toLowerCase()){
    newObject[firstLetter.toLowerCase()]=[]}
    newObject[firstLetter.toLowerCase()].push(arr[i])
    i++}
return  newObject
}



t=myFunction(['Alf', 'Alice', 'Ben'])
tExpected
={ a: ['Alf', 'Alice'], b: ['Ben']}

console.log(t,tExpected)