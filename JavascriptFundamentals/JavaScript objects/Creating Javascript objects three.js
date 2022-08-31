// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object
function myFunction(a, b)
{
newObject={}
for (i=0;i<a.length;i++){
newObject[a[i]]=b[i]}
return newObject
}
