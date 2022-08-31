// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max
function
myFunction(min, max){
newArray=[]
for (i=0;i<max-min+1;i++){newArray.push(i+min)}
return newArray
}
