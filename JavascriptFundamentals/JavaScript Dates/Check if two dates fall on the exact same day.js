
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise
function myFunction(a, b){

    return (Math.abs(a-b)/1000/3600<24)&&(getDate(a)==getDate(b))
}
