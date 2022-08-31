Check if property exists in object and is truthy
// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise
function myFunction(a, b)
{

return Object.keys(a).includes(b)&&Object.values(a)[b]!=null&&Object.values(a)[b]!=false
}

t=myFunction({a:1,b:2,c:3},'b')
tExpected
=true
s=myFunction({x:'a',y:null,z:'c'},'y')
sExpected
=false
u=myFunction({x:'a',b:'b',z:undefined},'z')
uExpected
=false

console.log(s,sExpected)
