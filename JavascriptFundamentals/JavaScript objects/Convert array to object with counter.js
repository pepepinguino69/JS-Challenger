// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array
function myFunction(a){
    newObj={}
   a.sort((a,b)=>a-b)
    
   a.forEach((e,index)=>{
   if(index===0)
        {newObj[e]=1}
        else if (e!==a[index-1])
                {newObj[e]=1}
            else
                {newObj[e]++}}
)
    return newObj
}

t=myFunction([9,9,9,99])
Expected=
{1:1,2:2,3:1}
console.log(t,Expected)
