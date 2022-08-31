function myFunction (a)
{
if (a== 2){return 2}
if (a%2==0){a++}
    let i=1
   do{
    i+=2
         if (a%i==0){a+=2;i=1}
   } while (i<1+(Math.ceil(Math.sqrt(a))))
return a
 
}


