// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

function myFunction(obj){
Object.keys(obj).forEach(e=>
    {if(obj[e]==undefined||obj[e].trim()==''){obj[e]=null}})

return obj
}

t=myFunction({ a: '', b: 'b', c: ' ', d: 'd' })
Expected=
{ a: null, b: 'b', c: null, d: 'd' }
console.log(t,Expected)
