
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
function myFunction(obj){
    Object.entries(obj).forEach(e=>{obj[e[1]]=e[0];delete obj[e[0]]})

return obj
}

t= myFunction({z:'a',y:'b',x:'c',w:'d'})
Expected=
{a:'z',b:'y',c:'x',d:'w'}

console.log(t,Expected)
