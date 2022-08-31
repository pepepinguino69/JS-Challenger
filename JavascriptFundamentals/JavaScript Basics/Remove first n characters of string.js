
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
function
myFunction
(
a, b
)
{
let arr=[]
arr=b.replace('%',"").split("")
arr.reverse()
b=arr.join()

return a.substring(0,1).toUpperCase+a.substring(1).replace('%',"")+b
}

t=myFunction('java', 'tpi%rcs')
tExpected=
'Javascript'
u=myFunction('c%ountry', 'edis')
uExpected=
'Countryside'
v=myFunction('down', 'nw%ot')
vExpected=
'Downtown'
console.logg(t==tExpected)