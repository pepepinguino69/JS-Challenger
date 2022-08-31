function myFunction(str){

newString="";
for (let i=0;i<str.length;i++){
newString+=String.fromCharCode(str.charCodeAt(i)+1)} 
return newString}