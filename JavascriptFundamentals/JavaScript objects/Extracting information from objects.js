
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in
function myFunction(obj){

newObject={}
fields=['fn','ln','weight','size']
units=["","",'kg','cm']
for(i=0;i<5;i++){
if(obj[fields[i]]!==undefined){newObject[fields[i]]=obj[fields[i]]+units[i]}}
return newObject
}
t=myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})
tExpected=
{fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
u=myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})
uExpected=
{fn: 'Martin', ln: 'Harper', weight: '102kg'}
v=myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})
vExpected
={fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
w=myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})
wExpected
={fn: 'Matthew', ln: 'Müller'}
console.log(u,uExpected)