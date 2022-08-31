
// This is a more difficult challenge
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds
function myFunction(a, b)
{
let dateDiff=Math.abs(a-b)/1000
let hourDiff=Math.floor(dateDiff/3600)
let minDiff=Math.floor((dateDiff-hourDiff*3600)/60)
let secDiff=Math.floor(dateDiff-hourDiff*3600)%60
return {'hrs':hourDiff,'min':minDiff,'sec':secDiff}







}
t= myFunction(new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00'))
Expected=
{ hrs: 1, min: 50, sec: 23 }

console.log(t,
    Expected)