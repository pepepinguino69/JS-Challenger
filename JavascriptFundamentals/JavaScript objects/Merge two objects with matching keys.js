// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'
function
myFunction(x, y)
{
y.d = y.b
delete y.b
x={...x,...y}
return x
}

t=myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })
Expected=
{ a: 1, b: 2, c: 3, e: 5, d: 4}

console.log(t,Expected)