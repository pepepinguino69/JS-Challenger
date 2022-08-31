
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
function myFunction(a, b){

    Object.keys(a).forEach(e=>a[e]=a[e]*b)
return a
}

