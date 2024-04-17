var enames=["Divya","Ayaan","Mani","Ruthvik"]
//itrate array-enames using for loop,while loop,do-while loop and for..of
//1.for loop
for(let i=0;i<=enames.length-1;i++)
{
    console.log(enames[i])
}

//2.while loop
var i=0;
while(i<=enames.length-1)
{
    console.log(enames[i])
    i++
}

//3.do-while loop
var i=0;
do{
    console.log(enames[i])
    i++
}while(i<=enames.length[i])
console.log("Using for.. of")

for(ename of enames)
console.log(ename)

